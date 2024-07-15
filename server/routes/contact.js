const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, company, inquiryType, message } =
    req.body;

  const fullName = `${firstName} ${lastName}`.trim();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission - ${inquiryType}`,
    text: `
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Inquiry Type: ${inquiryType}
      Message: ${message}
    `,
  };

  try {
    console.log("Preparing to send email with options:", mailOptions);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
});

module.exports = router;
