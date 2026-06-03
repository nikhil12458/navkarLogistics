import { google } from "googleapis";
import { config } from "../config/config.js";

// 1. Robust formatting: Fixes newlines AND strips accidental quotes added by hosting platforms
const formatPrivateKey = (key) => {
  if (!key) return "";
  return key.replace(/\\n/g, "\n").replace(/^"|"$/g, "");
};

// 2. Use GoogleAuth (Recommended over raw JWT)
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: config.GOOGLE_CLIENT_EMAIL,
    private_key: formatPrivateKey(config.GOOGLE_PRIVATE_KEY),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

console.log("Google Sheets Config:", {
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
  // 3. Explicitly generate/fetch the auth client BEFORE making the request
  const authClient = await auth.getClient();

  const sheets = google.sheets({
    version: "v4",
    auth: authClient,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: config.GOOGLE_SHEET_ID,
    range: "Sheet1!A:F",
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
