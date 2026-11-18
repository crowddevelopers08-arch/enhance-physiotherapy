/**
 * Enhance Physiotherapy & Wellness — lead sheet web app.
 *
 * POST: appends one lead row (sent by /api/submissions).
 * GET:  returns all leads as JSON  (…/exec)
 *       or as CSV                  (…/exec?format=csv)
 *       add ?sheet=chronic-pain-leads, post-surgery-leads or Review Leads to read another tab.
 *
 * Setup: open the Google Sheet > Extensions > Apps Script, paste this file,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 * Put the /exec URL in GOOGLE_APPS_SCRIPT_URL.
 */

const SHEET_NAME = 'enhance-physio-leads';          // main landing page (default)
const REVIEW_SHEET_NAME = 'Review Leads';           // review page
const CHRONIC_PAIN_SHEET_NAME = 'chronic-pain-leads'; // chronic-pain landing page
const POST_SURGERY_SHEET_NAME = 'post-surgery-leads'; // post-surgery landing page
const HEADERS = ['Timestamp', 'Form Name', 'Source', 'Name', 'Phone', 'Concern', 'Preferred Appointment Date & Time', 'URL', 'TeleCRM'];

// Which tab each sheetName / formName writes to. Anything unknown goes to the default tab.
function resolveSheetName_(name) {
  switch (name) {
    case REVIEW_SHEET_NAME:
      return REVIEW_SHEET_NAME;
    case CHRONIC_PAIN_SHEET_NAME:
    case 'chronic-pain-form':
      return CHRONIC_PAIN_SHEET_NAME;
    case POST_SURGERY_SHEET_NAME:
    case 'post-surgery-form':
      return POST_SURGERY_SHEET_NAME;
    default:
      return SHEET_NAME;
  }
}

function getSheet_(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const targetName = resolveSheetName_(sheetName);
  let sheet = ss.getSheetByName(targetName);
  if (!sheet) sheet = ss.insertSheet(targetName);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#eef2e6');
    sheet.setFrozenRows(1);
  } else {
    const existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const legacyAppointmentHeaderIndex = existingHeaders.indexOf('Preferred Appointment Time');
    if (legacyAppointmentHeaderIndex !== -1) {
      sheet.getRange(1, legacyAppointmentHeaderIndex + 1).setValue('Preferred Appointment Date & Time');
      existingHeaders[legacyAppointmentHeaderIndex] = 'Preferred Appointment Date & Time';
    }
    const appointmentHeaderIndex = existingHeaders.indexOf('Preferred Appointment Date & Time');
    const concernHeaderIndex = existingHeaders.indexOf('Concern');
    if (appointmentHeaderIndex !== -1 && concernHeaderIndex !== -1 && appointmentHeaderIndex !== concernHeaderIndex + 1) {
      // Move the complete existing column (header and lead values) directly after Concern.
      sheet.moveColumns(sheet.getRange(1, appointmentHeaderIndex + 1, sheet.getMaxRows(), 1), concernHeaderIndex + 2);
      const movedHeader = existingHeaders.splice(appointmentHeaderIndex, 1)[0];
      existingHeaders.splice(concernHeaderIndex + 1, 0, movedHeader);
    }
    HEADERS.forEach(function(header) {
      if (existingHeaders.indexOf(header) === -1) {
        sheet.getRange(1, sheet.getLastColumn() + 1).setValue(header).setFontWeight('bold').setBackground('#eef2e6');
      }
    });
  }
  return sheet;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const sheet = getSheet_(body.sheetName || body.tabName || body.formName);

    const row = [
      body.timestamp || Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy, HH:mm:ss'),
      body.formName || 'enhance-physio-leads',
      body.source || 'Enhance Physiotherapy Clinic',
      body.name || '',
      // Leading apostrophe keeps "+91…" as text instead of a formula/number
      body.phone ? "'" + body.phone : '',
      body.concern || '',
      body.appointmentTime || '',
      body.pageUrl || body.url || '',
      body.telecrm || '',
    ];

    sheet.appendRow(row);
    return json_({ success: true, tab: sheet.getName(), row: sheet.getLastRow() });
  } catch (err) {
    return json_({ success: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const sheet = getSheet_(e && e.parameter && e.parameter.sheet);
  const values = sheet.getDataRange().getDisplayValues();
  const format = e && e.parameter && e.parameter.format;

  if (format === 'csv') {
    const csv = values
      .map((r) => r.map((v) => (/[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v)).join(','))
      .join('\n');
    return ContentService.createTextOutput(csv).setMimeType(ContentService.MimeType.CSV);
  }

  const [headers, ...rows] = values;
  const leads = rows.map((r) => Object.fromEntries(headers.map((h, i) => [h, r[i]])));
  return json_({ success: true, count: leads.length, leads });
}
