var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkSchema = new Schema({
    title: {type: String, required: true, index: {unique: true}},
    description: {type: String, required: true, default: '这人什么都没说ˊ_>ˋ'},
    date: {type: Date, default: Date.now()},
    uploader: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    links: [Schema.Types.Mixed],
    av: {type: String}
});

module.exports = mongoose.model('Work', WorkSchema);