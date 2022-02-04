const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const product = require("./route/productRoute");

app.use("/api", product);

app.get("/", (req, res) => {
  res.send("It is working");
});

module.exports = app;
