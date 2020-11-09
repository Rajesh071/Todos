var mongoose = require("mongoose");
var Todo = require("./Todo");
var Schema = mongoose.Schema;
var todo = new Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  description: {
    type: String,
    unique: false,
    required: true,
  },
  dueDate: {
    type: Date, default: Date.now
  },
  subTodo: [Todo],
});

module.exports = todo;
