const express = require("express");
const cors = require("cors");
require("dotenv").config();

const servicesRouter = require("./routes/services");
const contactRouter = require("./routes/contact");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to SimJat Consulting API" });
});

app.use("/api/services", servicesRouter);
app.use("/api/contact", contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
