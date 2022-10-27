const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

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

app.listen(0907);

const url =
  "mongodb+srv://shivam:1234@users.rt3s6dm.mongodb.net/?retryWrites=true&w=majority";

try {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected");
} catch (err) {
  console.log(err);
}
