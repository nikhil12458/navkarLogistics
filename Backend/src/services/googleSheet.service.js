import { google } from "googleapis";
import { config } from "../config/config.js";

const auth = new google.auth.JWT(
  config.GOOGLE_CLIENT_EMAIL,
  null,
  (config.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  ["https://www.googleapis.com/auth/spreadsheets"],
);

console.log("Sheet ID:", config.GOOGLE_SHEET_ID);
console.log("Client Email:", config.GOOGLE_CLIENT_EMAIL);

console.log({
  email: config.GOOGLE_CLIENT_EMAIL,
  hasKey: !!config.GOOGLE_PRIVATE_KEY,
  sheetId: config.GOOGLE_SHEET_ID,
});

export async function appendLead({
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  yourRequirements,
}) {
  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: config.GOOGLE_SHEET_ID,
    range: "Sheet1!A:F", // change if your sheet tab name is different
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toLocaleString(),
          firstName,
          lastName,
          emailAddress,
          phoneNumber,
          yourRequirements,
        ],
      ],
    },
  });
}
