// Get Methods
// Handling Home Route

const { db } = require("../model/model");
const model = require("../model/model");

let set = {};

exports.homeRoute = (req, res) => {
  res.render("home", {});
};

// Handling page 1 Route
exports.page1Route = (req, res) => {
  res.render("page1", {});
};

// Handling page 2 Route
exports.page2Route = (req, res) => {
  res.render("page2", {});
};

// Handling Summary Route
exports.summaryRoute = (req, res) => {
  res.render("summary", { set });
};

// Handling History Route
exports.historyRoute = (req, res) => {
  res.render("history", { history });
};

//  POST method

exports.addPage2Route = async (req, res) => {
  const answer2 = req.body.checkBox;
  set.answer2 = answer2;

  console.log("Answer : " + set.answer2);

  let setSend = new model(set);
  const result = await setSend.save();

  console.log(result);

  res.render("summary", { set });

  set = {};
};

// Handling addData Route

exports.addNameRoute = (req, res) => {
  const n = req.body.name;
  set.name = n;
  console.log(set.name);
  res.redirect("/question1");
};

exports.addPage1Route = (req, res) => {
  const answer1 = req.body.ans1;
  set.answer1 = answer1;
  console.log("Answer : " + set.answer1);
  res.redirect("/question2");
};
