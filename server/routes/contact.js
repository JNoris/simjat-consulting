const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically save this to a database or send an email
  console.log("Contact form submission:", { name, email, message });
  res.json({
    message: "Thank you for your message. We will get back to you soon.",
  });
});

module.exports = router;
