const express = require('express');
const route = express.Router();
const { homeRoute, summaryRoute, historyRoute, showQRoute, addDataRoute, fetchDataRoute } = require('../controller/controller');


// Handling the home
route.get('/home', homeRoute);

// Handling the summary
route.get('/summary',summaryRoute);

// Handling the history
route.get('/history' , historyRoute);

// Handling the Question
route.get('/question' ,showQRoute)

// API
route.get('/api/fetchData', addDataRoute);

route.post('/api/addData', fetchDataRoute);

module.exports = route;