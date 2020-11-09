var Todos = require("./tods.dao");

module.exports = {
  createTodo: function (req, res, next) {
    console.log("post",req.body);
    var todo = {
      name: req.body.name,
      description: req.body.description,
      dueDate: req.body.dueDate
    };

    Todos.create(todo, function (err, todo) {
      if (err) {
        res.json({
          error: err,
        });
        return
      }
      res.json({
        message: "Todos created successfully with ID: " + todo._id
      });
    });
  },
  getTodos: function (req, res, next) {
    Todos.get({}, function (err, todos) {
      if (err) {
        res.json({
          error: err,
        });
        return
      }
      res.json({
        todos: todos,
      });
    });
  },
  getTodo: function (req, res, next) {
    Todos.getByName({ _id: req.params.id }, function (err, todo) {
      if (err) {
        res.json({
          error: err,
        });
        return
      }
      console.log("Getybbb",req.params.id)
      res.json({
        todo: todo,
      });
    });
  },

  updateTodo: function (req, res, next) {
    var hero = {
      name: req.body.name,
      description: req.body.description,
    };
    Todos.update({ _id: req.params.id }, hero, function (err, todo) {
      if (err) {
        res.json({
          error: err,
        });
        return
      }
      res.json({
        message: "Todo updated successfully",
      });
    });
  },

  removeTodo: function (req, res, next) {
    Todos.delete({ _id: req.params.id }, function (err, todo) {
      if (err) {
        res.json({
          error: err,
        });
        return
      }
      res.json({
        message: "Todo deleted successfully",
      });
    });
  },
};
