var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorksSchema = new Schema({
    title: {type: String, required: true, index: {unique: true}},
    description: {type: String, required: true, default: '这人什么都没说ˊ_>ˋ'},
    date: {type: Date, default: Date.now()},
    uploader: {type: User, required: true},
    links: [Schema.Types.Mixed]
});

module.exports = mongoose.model('Works', WorksSchema);