const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const app = express();

const userRoutes = require("./routes/userRoutes");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", userRoutes);

app.use("/*", (req, res, next) => {
  res.render("index.ejs");
});

app.listen(0907);

const url = process.env.URL;

try {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected");
} catch (err) {
  console.log(err);
}
