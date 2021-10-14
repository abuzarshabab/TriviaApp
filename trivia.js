const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const route = require("./routes/route");
const mongoose = require("mongoose");
const server = express();

const PORT = process.env.PORT || 3000;
const mongoUrl = " mongodb://127.0.0.1:27017/trivia";

// Connection to mongoose database
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Succeed");
  })
  .catch((err) => {
    console.log("err" + err);
  });

// Parsing all incoming request (req.bod.{})
server.use(bodyparser.urlencoded({ extended: true }));

// Choosing rendering engine to ejs
server.set("view engine", "ejs");

// Creating virtual Css path as vCss
server.use("/vCss", express.static(path.resolve(__dirname, "assets/css/")));

// Setting route to the route.js
server.use("/", route);

// Listening for server
server.listen(PORT, () => {
  console.log(`Trivia is listening at localhost:${PORT}`);
});


