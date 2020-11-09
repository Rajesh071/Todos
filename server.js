const express = require("express");
const bodyParser = require("body-parser");
var properties = require("./config/propoties");
var db = require("./config/database");
const todosRoutes = require("./todos/todos.routes");

var app = express();

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

var router = express.Router();

// call the database connectivity function
db();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);


// use express router
app.use("/api/v1", router);
//call heros routing
todosRoutes(router);

// intialise server
app.listen(properties.PORT, (req, res) => {
  console.log(`Server is running on ${properties.PORT} port.`);
});
