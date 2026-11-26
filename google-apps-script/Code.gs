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
const APPOINTMENT_HEADER = 'Preferred Appointment Date & Time';
const MODE_HEADER = 'Preferred Mode of Consultation';
// Landing pages and review page: their forms ask for an appointment date & time
const HEADERS = ['Timestamp', 'Form Name', 'Source', 'Name', 'Phone', 'Concern', APPOINTMENT_HEADER, 'URL', 'TeleCRM'];
// Main page popup: asks for the consultation mode, has no date & time field
const MAIN_HEADERS = ['Timestamp', 'Form Name', 'Source', 'Name', 'Phone', 'Concern', MODE_HEADER, 'URL', 'TeleCRM'];

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

function readHeaders_(sheet) {
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
}

// Moves a whole column (header and lead values) so it sits directly after "Concern"
function moveAfterConcern_(sheet, header) {
  const headers = readHeaders_(sheet);
  const from = headers.indexOf(header);
  const concern = headers.indexOf('Concern');
  if (from !== -1 && concern !== -1 && from !== concern + 1) {
    sheet.moveColumns(sheet.getRange(1, from + 1, sheet.getMaxRows(), 1), concern + 2);
  }
}

function isColumnEmpty_(sheet, column) {
  if (sheet.getLastRow() < 2) return true;
  return sheet.getRange(2, column, sheet.getLastRow() - 1, 1).getValues().every(function (r) { return r[0] === ''; });
}

// The main tab has no date & time field: that column becomes "Preferred Mode of Consultation"
function tidyMainTab_(sheet) {
  const headers = readHeaders_(sheet);
  const appointment = headers.indexOf(APPOINTMENT_HEADER);
  if (appointment === -1) return;
  if (headers.indexOf(MODE_HEADER) === -1) {
    sheet.getRange(1, appointment + 1).setValue(MODE_HEADER);
  } else if (isColumnEmpty_(sheet, appointment + 1)) {
    sheet.deleteColumn(appointment + 1); // only ever removes a column with no data in it
  }
}

function getSheet_(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const targetName = resolveSheetName_(sheetName);
  let sheet = ss.getSheetByName(targetName);
  if (!sheet) sheet = ss.insertSheet(targetName);

  const isMain = targetName === SHEET_NAME;
  const wanted = isMain ? MAIN_HEADERS : HEADERS;

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(wanted);
    sheet.getRange(1, 1, 1, wanted.length).setFontWeight('bold').setBackground('#eef2e6');
    sheet.setFrozenRows(1);
    return sheet;
  }

  const legacy = readHeaders_(sheet).indexOf('Preferred Appointment Time');
  if (legacy !== -1) sheet.getRange(1, legacy + 1).setValue(APPOINTMENT_HEADER);

  if (isMain) tidyMainTab_(sheet);

  const existing = readHeaders_(sheet);
  wanted.forEach(function (header) {
    if (existing.indexOf(header) === -1) {
      sheet.getRange(1, sheet.getLastColumn() + 1).setValue(header).setFontWeight('bold').setBackground('#eef2e6');
    }
  });
  moveAfterConcern_(sheet, isMain ? MODE_HEADER : APPOINTMENT_HEADER);
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

    const values = {
      'Timestamp': body.timestamp || Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy, HH:mm:ss'),
      'Form Name': body.formName || 'enhance-physio-leads',
      'Source': body.source || 'Enhance Physiotherapy Clinic',
      'Name': body.name || '',
      // Leading apostrophe keeps "+91…" as text instead of a formula/number
      'Phone': body.phone ? "'" + body.phone : '',
      'Concern': body.concern || '',
      'Preferred Appointment Date & Time': body.appointmentTime || '',
      'Preferred Mode of Consultation': body.consultationMode || '',
      'URL': body.pageUrl || body.url || '',
      'TeleCRM': body.telecrm || '',
    };

    // Write each value under its own header, whatever order the tab's columns are in
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = headers.map(function (header) {
      return values.hasOwnProperty(header) ? values[header] : '';
    });

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
