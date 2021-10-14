const express = require('express');
const route = express.Router();
const {
  homeRoute,
  summaryRoute,
  historyRoute,
  page1Route,
  page2Route,
  addNameRoute,
  addPage1Route,
  addPage2Route,
} = require("../controller/controller");

// Handling the home
route.get("/home", homeRoute);
route.get("/", homeRoute);

// Handling the Question
route.get("/question1", page1Route);

// Handling the Question
route.get("/question2", page2Route);

// Handling the history
route.get("/history", historyRoute);

// API
route.post("/addName", addNameRoute);

route.post("/addQuestion1", addPage1Route);

route.post("/summary", addPage2Route);



module.exports = route;