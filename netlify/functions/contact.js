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

  const { firstName, lastName, email, message } = body;

  if (!firstName || !lastName || !email || !message) {
    return { statusCode: 400, body: "Missing required fields" };
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
    await transporter.sendMail({
      from: `"sabrinafeld.com" <${process.env.SMTP_USER}>`,
      to: "sabrina@feld.com",
      replyTo: email,
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("Mail error:", err);
    return { statusCode: 500, body: "Failed to send email" };
  }
};
