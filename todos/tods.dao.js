var todosSchema = require("./Todos");
var mongoose = require("mongoose");

todosSchema.statics = {
  create: function (data, cb) {
    var todo = new this(data);
    todo.save(cb);
  },

  get: function (query, cb) {
    this.find(query, cb);
  },

  getByName: function (query, cb) {
    this.find(query, cb);
  },

  update: function (query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

var todoModel = mongoose.model("Todos", todosSchema);
module.exports = todoModel;
