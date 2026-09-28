/**
 * Enhance Physiotherapy & Wellness — lead sheet web app.
 *
 * POST: appends one lead row (sent by /api/submissions).
 * GET:  returns all leads as JSON  (…/exec)
 *       or as CSV                  (…/exec?format=csv)
 *
 * Setup: open the Google Sheet > Extensions > Apps Script, paste this file,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 * Put the /exec URL in GOOGLE_APPS_SCRIPT_URL.
 */

const SHEET_NAME = 'enhance-physio-leads';
const HEADERS = ['Timestamp', 'Form Name', 'Source', 'Name', 'Phone', 'Concern', 'URL', 'TeleCRM'];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#eef2e6');
    sheet.setFrozenRows(1);
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
    const sheet = getSheet_();

    const row = [
      body.timestamp || Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy, HH:mm:ss'),
      body.formName || 'enhance-physio-leads',
      body.source || 'Enhance Physiotherapy Clinic',
      body.name || '',
      // Leading apostrophe keeps "+91…" as text instead of a formula/number
      body.phone ? "'" + body.phone : '',
      body.concern || '',
      body.pageUrl || body.url || '',
      body.telecrm || '',
    ];

    sheet.appendRow(row);
    return json_({ success: true, row: sheet.getLastRow() });
  } catch (err) {
    return json_({ success: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const sheet = getSheet_();
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
