var Todos = require('./todos.controller');

module.exports = function(router) {
    router.get('/todo', Todos.getTodos);
    router.post('/todo', Todos.createTodo);
    router.get('/todo/:id', Todos.getTodo);
    router.put('/todo/:id', Todos.updateTodo);
    router.delete('/todo/:id', Todos.removeTodo);
}