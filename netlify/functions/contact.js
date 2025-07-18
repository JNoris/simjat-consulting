const nodemailer = require("nodemailer");

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
  
  // Clean old requests
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
  
  // Record this request
  recentRequests.push(now);
  requestCounts.set(clientIP, recentRequests);

  let requestData;
  try {
    requestData = JSON.parse(event.body);
  } catch (parseError) {
    console.error("JSON parsing error:", parseError);
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: "Invalid JSON format",
        details: "Request body must be valid JSON"
      })
    };
  }

  const { name, email, phone, company, inquiryType, message } = requestData;

  // Input validation
  const validationErrors = [];
  
  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    validationErrors.push("Name is required and must be at least 2 characters");
  }
  
  if (!email || typeof email !== 'string') {
    validationErrors.push("Email is required");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      validationErrors.push("Please provide a valid email address");
    }
  }
  
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    validationErrors.push("Message is required and must be at least 10 characters");
  }
  
  // Validate optional fields
  if (phone && typeof phone === 'string') {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      validationErrors.push("Please provide a valid phone number");
    }
  }
  
  if (inquiryType && !['personal', 'business'].includes(inquiryType)) {
    validationErrors.push("Invalid inquiry type");
  }
  
  // Check field lengths to prevent abuse
  if (name && name.length > 100) validationErrors.push("Name is too long (max 100 characters)");
  if (email && email.length > 254) validationErrors.push("Email is too long");
  if (message && message.length > 5000) validationErrors.push("Message is too long (max 5000 characters)");
  if (company && company.length > 100) validationErrors.push("Company name is too long (max 100 characters)");
  
  if (validationErrors.length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: "Validation failed",
        details: validationErrors
      })
    };
  }

  // Sanitize inputs (basic HTML escaping)
  const sanitize = (str) => {
    if (!str) return str;
    return str.replace(/[<>]/g, '').trim();
  };
  
  const sanitizedData = {
    name: sanitize(name),
    email: sanitize(email),
    phone: sanitize(phone),
    company: sanitize(company),
    inquiryType: sanitize(inquiryType),
    message: sanitize(message)
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
    
    // Provide more specific error messages based on error type
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
