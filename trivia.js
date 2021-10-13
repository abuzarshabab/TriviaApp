const express = require("express");
const ejs = require("ejs");
const path = require("path");
const route = require('./routes/route')

const server = express();
const PORT = process.env.PORT || 3000 ;

server.set("vies engine", "ejs");

// Creating virtual Css path as vCss
server.use("/vCss", express.static(path.join(__dirname + "asset/css/style.css"))
);

// Set routing to the route.js
server.use('/', route);

server.listen(PORT, () => {
  console.log(`Trivia is listening at localhost:${PORT}`);
});
