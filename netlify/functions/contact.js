const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const {
    name,
    email,
    phone,
    company,
    inquiryType,
    message,
    ...additionalFields
  } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Build additional fields string
  let additionalInfo = "";
  Object.entries(additionalFields).forEach(([key, value]) => {
    if (value) {
      additionalInfo += `        ${key
        .replace(/([A-Z])/g, " $1")
        .trim()}: ${value}\n`;
    }
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "simjatconsulting@gmail.com",
      subject: `New ${inquiryType} inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Company: ${company || "Not provided"}
        Inquiry Type: ${inquiryType}
${additionalInfo}
        Message: 
        ${message}
      `,
      html: `
        <h3>New ${inquiryType} Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        ${
          additionalInfo
            ? `<h4>Additional Information:</h4><pre>${additionalInfo}</pre>`
            : ""
        }
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};
