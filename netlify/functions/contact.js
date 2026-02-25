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

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return { statusCode: 500, body: "Server configuration error" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "sabrinafeld.com <contact@sabrinafeld.com>",
        to: ["sabrina@feld.com"],
        reply_to: email,
        subject: `New message from ${firstName} ${lastName}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return { statusCode: 500, body: "Failed to send email" };
    }

    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("Contact function error:", err);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
