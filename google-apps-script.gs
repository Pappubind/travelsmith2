/**
 * Google Apps Script to handle form submissions from Travelsmith Website
 * 
 * Instructions:
 * 1. Create a new Google Sheet.
 * 2. Go to Extensions > App Script.
 * 3. Delete any code and paste this code.
 * 4. Click 'Deploy' > 'New Deployment'.
 * 5. Select type 'Web App'.
 * 6. Set Description to 'Travelsmith Form Handler'.
 * 7. Set 'Execute as' to 'Me'.
 * 8. Set 'Who has access' to 'Anyone'.
 * 9. Click Deploy, Authorize access, and copy the Web App URL.
 */

function doPost(e) {
  const sheetName = "Submissions"; // Explicitly name your sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Destination', 'Message']);
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#f3f3f3');
  }

  try {
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (f) {
      data = e.parameter; // Fallback to parameters
    }
    
    // Extract data fields
    const timestamp = new Date();
    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const phone = data.phone || "N/A";
    const destination = data.destination || "N/A";
    const message = data.message || "N/A";
    
    // Append to sheet
    sheet.appendRow([timestamp, name, email, phone, destination, message]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error to a new sheet called "ErrorLog" if it fails
    let errSheet = ss.getSheetByName("ErrorLog");
    if (!errSheet) errSheet = ss.insertSheet("ErrorLog");
    errSheet.appendRow([new Date(), error.toString(), JSON.stringify(e)]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Added doGet to help verify setup or for simple testing
function doGet() {
  return ContentService.createTextOutput("Travelsmith Form Handler is Active. Please use POST for submissions.");
}
