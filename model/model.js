const mongoose = require("mongoose");

var ansSet = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  answer1: {
    type: String,
    required: true,
  },
  answer2: {
    type: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AnswerSet", ansSet);
