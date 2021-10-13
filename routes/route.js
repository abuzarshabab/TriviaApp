const express = require('express');
const route = express.Router();
const {
  homeRoute,
  summaryRoute,
  historyRoute,
  page1Route,
  page2Route,
  addDataRoute,
  fetchDataRoute,
} = require("../controller/controller");

// Handling the home
route.get("/home", homeRoute);

// Handling the Question
route.get("/question1", page1Route);

// Handling the Question
route.get("/question2", page2Route);

// Handling the summary
route.get("/summary", summaryRoute);

// Handling the history
route.get("/history", historyRoute);

// API
route.get('/api/fetchData', addDataRoute);

route.post('/api/addData', fetchDataRoute);

module.exports = route;