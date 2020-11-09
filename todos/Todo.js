var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todo= new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    },
    dueDate:{
        type: Date, default: Date.now
    }
});

module.exports = todo;