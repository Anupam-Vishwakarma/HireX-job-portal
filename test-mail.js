import nodemailer from "nodemailer";

// Manually testing the credentials
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "india.careerlabconsulting@gmail.com",
    pass: "wvph klwz iwfc vtcx", 
  },
});

console.log("INITIALIZING TEST TRANSMISSION...");

async function runTest() {
  try {
    const info = await transporter.sendMail({
      from: '"TEST SYSTEM" <india.careerlabconsulting@gmail.com>',
      to: "india.careerlabconsulting@gmail.com",
      subject: "PROTOCOL TEST: SMTP VERIFICATION",
      text: "Gmail App Password valid. Server ready.",
    });
    console.log("✅ TEST SUCCESSFUL! Message ID:", info.messageId);
  } catch (err) {
    console.error("❌ TEST FAILED:", err.message);
  }
}

runTest();