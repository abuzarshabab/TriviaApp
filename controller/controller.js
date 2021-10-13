// Handling Home Route
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
  res.render("summary", {});
};

// Handling History Route
exports.historyRoute = (req, res) => {
  res.render("history", {});
};

// Handling addData Route
exports.addDataRoute = (req, res) => {
  res.render("home.ejs", {});
};

// Handling fetch Data Route
exports.fetchDataRoute = (req, res) => {
  res.render("home.ejs", {});
};

