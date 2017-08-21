// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Records', new Schema({ 
    username: String, 
    time: String, 
    runname: String 
}));