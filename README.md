Basic CRUD using nodejs, MongoDB, ExpressJS and Moongose

The service shall allow to manage Todos, e.g., like you might know it from Wunderlist, Todoist or similar applications but ofcourse a much
simpler one. A Todo contains an arbitrary list of subtasks
o Support for the below fields
o Name
o Description
o Due Date
o Each task can have arbitrary number of sub-tasks with support for similar fields
The service shall support the following endpoints:
Method Endpoint Description
GET /todos Returns a list of all Todos
POST /todos Expects a Todo (without id) and returns a Todo with id
GET /todos/{id} Returns a Todo
PUT /todos/{id} Overwrites an existing Todo
DELETE /todos/{id} Deletes a Todo
