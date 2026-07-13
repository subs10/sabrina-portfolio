const nodemailer = require("nodemailer");

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  const { firstName, lastName, email, subject, message, _hp_trap, turnstileToken } = body;

  // Honeypot: bots fill this hidden field, humans don't
  if (_hp_trap) {
    return { statusCode: 200, body: "OK" };
  }

  if (!firstName || !lastName || !email || !subject || !message) {
    return { statusCode: 400, body: "Missing required fields" };
  }

  // Verify Turnstile token
  if (!turnstileToken) {
    return { statusCode: 400, body: "Missing verification token" };
  }

  const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET,
      response: turnstileToken,
    }),
  });

  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    return { statusCode: 403, body: "Verification failed" };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${firstName} ${lastName} via sabrinafeld.com" <${process.env.SMTP_USER}>`,
      to: "sabrina@feld.com",
      replyTo: email,
      subject: `${subject} — ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("Mail error:", err.message);
    return { statusCode: 500, body: "Failed to send email" };
  }
};
