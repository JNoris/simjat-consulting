const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRouter = require("./routes/contact");

const app = express();
const port = process.env.PORT || 5000;

const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to SimJat Consulting API" });
});

app.use("/api/contact", contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports.handler = serverless(app);
