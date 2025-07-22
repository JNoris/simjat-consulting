const nodemailer = require("nodemailer");
const { body, validationResult } = require('express-validator');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

// Simple in-memory rate limiting (for production, use Redis or database)
const requestCounts = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: "Method Not Allowed" }) 
    };
  }

  // Rate limiting
  const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
  const now = Date.now();
  const userRequests = requestCounts.get(clientIP) || [];
  
  const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return {
      statusCode: 429,
      body: JSON.stringify({ 
        error: "Too Many Requests",
        details: "Please wait before sending another message"
      })
    };
  }
  
  recentRequests.push(now);
  requestCounts.set(clientIP, recentRequests);

  let requestData;
  try {
    requestData = JSON.parse(event.body);
  } catch (parseError) {
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: "Invalid JSON format",
        details: "Request body must be valid JSON"
      })
    };
  }

  const { name, email, phone, company, inquiryType, message } = requestData;

  // Input validation and sanitization
  const validations = [
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters').trim().escape(),
    body('email').isEmail().withMessage('Please provide a valid email address').isLength({ max: 254 }).withMessage('Email is too long').normalizeEmail(),
    body('message').notEmpty().withMessage('Message is required').isLength({ min: 10, max: 5000 }).withMessage('Message must be between 10 and 5000 characters').trim().escape(),
    body('phone').optional().isMobilePhone().withMessage('Please provide a valid phone number').trim().escape(),
    body('company').optional().isLength({ max: 100 }).withMessage('Company name is too long').trim().escape(),
    body('inquiryType').optional().isIn(['personal', 'business']).withMessage('Invalid inquiry type').trim().escape()
  ];

  await Promise.all(validations.map(validation => validation.run({ body: requestData })));

  const errors = validationResult({ body: requestData });
  if (!errors.isEmpty()) {
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: "Validation failed",
        details: errors.array()
      })
    };
  }

  const sanitizedData = {
    name: DOMPurify.sanitize(name),
    email: DOMPurify.sanitize(email),
    phone: DOMPurify.sanitize(phone),
    company: DOMPurify.sanitize(company),
    inquiryType: DOMPurify.sanitize(inquiryType),
    message: DOMPurify.sanitize(message)
  };

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${sanitizedData.name}" <${sanitizedData.email}>`,
      to: "simjatconsultinginc@gmail.com",
      subject: `New ${sanitizedData.inquiryType} inquiry from ${sanitizedData.name}`,
      text: `
        Name: ${sanitizedData.name}
        Email: ${sanitizedData.email}
        Phone: ${sanitizedData.phone || 'Not provided'}
        Company: ${sanitizedData.company || 'Not provided'}
        Inquiry Type: ${sanitizedData.inquiryType}
        Message: ${sanitizedData.message}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: "Message sent successfully! We'll get back to you soon."
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    
    let errorMessage = "Unable to send message at this time";
    if (error.code === 'EAUTH') {
      errorMessage = "Email service authentication failed";
    } else if (error.code === 'ECONNECTION') {
      errorMessage = "Unable to connect to email service";
    } else if (error.responseCode === 550) {
      errorMessage = "Invalid email address";
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: "Email delivery failed",
        details: errorMessage
      }),
    };
  }
};
