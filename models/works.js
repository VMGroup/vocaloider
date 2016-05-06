var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorksSchema = new Schema({
    title: {type: String, required: true, index: {unique: true}},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Works', WorksSchema);