const express = require("express");
const ejs = require("ejs");
const path = require("path");
const route = require('./routes/route')
const mongoose = require("mongoose");

const server = express();
const PORT = process.env.PORT || 3000;

main().catch((err) => {
  console.log("err");
});

async function main() {
  console.log("Before Db connection");
  await mongoose.connect("mongodb://127.0.0.1:27017/trivia");
  console.log("Database is connected");
}

server.set("view engine", "ejs");

// Creating virtual Css path as vCss
server.use("/vCss", express.static(path.resolve(__dirname, "assets/css/")));

// Set routing to the route.js
server.use('/', route);

server.listen(PORT, () => {
  console.log(`Trivia is listening at localhost:${PORT}`);
});
