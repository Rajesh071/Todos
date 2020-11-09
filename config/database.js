//require mongoose module
var mongoose = require("mongoose");

//require database URL from properties file
var dbURL = require("./propoties").DB;

//export this function and imported by server.js
module.exports = function () {
  mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    // we're connected!
    console.log("connected to db");
  });
};
