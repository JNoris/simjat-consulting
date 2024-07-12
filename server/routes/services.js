const express = require("express");
const router = express.Router();

const services = [
  {
    id: 1,
    name: "Personal Accounting",
    description: "Tailored accounting solutions for individuals",
  },
  {
    id: 2,
    name: "Property Accounting",
    description:
      "Specialized accounting for real estate and property management",
  },
  {
    id: 3,
    name: "Non-Profit Accounting",
    description: "Accounting services for non-profit organizations",
  },
  {
    id: 4,
    name: "Corporate Accounting",
    description: "Comprehensive accounting solutions for businesses",
  },
  {
    id: 5,
    name: "Bookkeeping",
    description: "Accurate and efficient bookkeeping services",
  },
];

router.get("/", (req, res) => {
  res.json(services);
});

router.get("/:id", (req, res) => {
  const service = services.find((s) => s.id === parseInt(req.params.id));
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
});

module.exports = router;
