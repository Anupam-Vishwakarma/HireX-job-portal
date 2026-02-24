import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      fullName, email, countryCode, phone,
      inquiryType, locality, city, state, feedback
    } = await req.json();

    if (!process.env.EMAIL_PASS) {
      console.error("CRITICAL_ERROR: EMAIL_PASS is not defined in .env.local");
      return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
    }

    const fullPhone = `${countryCode} ${phone}`;
    const fullAddress = [locality, city, state].filter(Boolean).join(", ");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "india.careerlabconsulting@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    // ── ADMIN ALERT ──
    const adminMail = {
      from: `"HireX System Bot" <india.careerlabconsulting@gmail.com>`,
      to: "info@careerlabconsulting.com",
      subject: `[NEW INQUIRY] ${fullName.toUpperCase()} — ${inquiryType}`,
      html: `
        <div style="background:#020617;color:#f8fafc;padding:40px;font-family:Arial,sans-serif;border-radius:16px;border:1px solid #1e293b;max-width:600px;margin:auto;">
          <div style="border-left:3px solid #3b82f6;padding-left:20px;margin-bottom:30px;">
            <h1 style="color:#fff;text-transform:uppercase;letter-spacing:4px;font-size:18px;margin:0;">New Inquiry Received</h1>
            <p style="color:#3b82f6;font-size:10px;font-weight:bold;letter-spacing:2px;margin:5px 0 0 0;">HIREX SYSTEM LOG</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:12px;">
            ${[
              ["Full Name", fullName],
              ["Email", email],
              ["Phone", fullPhone],
              ["Inquiry Type", inquiryType],
              ["Location", fullAddress],
            ].map(([k, v]) => `
              <tr>
                <td style="padding:10px 0;color:#64748b;text-transform:uppercase;letter-spacing:1px;width:40%;border-bottom:1px solid #1e293b;">${k}</td>
                <td style="padding:10px 0;color:#f8fafc;border-bottom:1px solid #1e293b;">${v}</td>
              </tr>
            `).join("")}
          </table>
          <div style="background:#0f172a;padding:20px;border-radius:12px;margin:24px 0;border:1px solid #1e293b;">
            <p style="font-size:9px;color:#3b82f6;margin:0 0 10px;font-weight:bold;letter-spacing:2px;">MESSAGE</p>
            <p style="font-size:12px;color:#94a3b8;margin:0;line-height:1.7;">${feedback}</p>
          </div>
        </div>
      `,
    };

    // ── USER CONFIRMATION ──
    const userMail = {
      from: `"Career Lab Consulting" <india.careerlabconsulting@gmail.com>`,
      to: email,
      subject: "We received your inquiry — Career Lab Consulting",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;background:#ffffff;padding:40px;border:1px solid #e5e7eb;border-radius:8px;">
            
            <p style="font-size:15px;color:#111827;margin:0 0 20px 0;">Dear ${fullName},</p>

            <p style="font-size:14px;color:#374151;line-height:1.7;margin:0 0 10px 0;">
              Thank you so much for reaching out to us! We truly appreciate you taking the time to connect with Career Lab Consulting. Your trust means a great deal to us.
            </p>

            <p style="font-size:14px;color:#374151;line-height:1.7;margin:0 0 24px 0;">
              We are pleased to confirm that your inquiry has been successfully received. Below is a summary of the details you submitted:
            </p>

            <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;">
              <tbody>
                ${[
                  ["Name", fullName],
                  ["Email", email],
                  ["Mobile Number", fullPhone],
                  ["Inquiry Type", inquiryType],
                  ["Address", fullAddress],
                  ["Message", feedback],
                ].map(([k, v]) => `
                  <tr>
                    <td style="padding:10px 14px;background:#f9fafb;color:#6b7280;font-weight:bold;border:1px solid #e5e7eb;width:35%;vertical-align:top;">${k}</td>
                    <td style="padding:10px 14px;color:#111827;border:1px solid #e5e7eb;">${v}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>

            <p style="font-size:14px;color:#374151;line-height:1.7;margin:0 0 30px 0;">
              Our team is currently reviewing your inquiry and will get back to you within <strong>24–48 hours</strong>. We look forward to connecting with you soon.
            </p>

            <p style="font-size:14px;color:#374151;margin:0;">Best Regards,</p>
            <p style="font-size:14px;color:#111827;font-weight:bold;margin:4px 0 0 0;">Career Lab Consulting</p>
          </div>
          `,
        };

 const adminResult = await transporter.sendMail(adminMail);
    console.log("ADMIN MAIL SENT:", adminResult);

    const userResult = await transporter.sendMail(userMail);
    console.log("USER MAIL SENT:", userResult);

    // await Promise.all([
    //   transporter.sendMail(adminMail),
    //   transporter.sendMail(userMail),
    // ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("TRANSMISSION_ERROR_LOG:", error);
    return NextResponse.json({ error: "Transmission failed" }, { status: 500 });
  }
}