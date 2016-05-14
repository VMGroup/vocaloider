var Works = require('../../models/works');

exports.AddWorks = function (req, res) {
    var works = new Works();
    works.title = req.body.title;
    works.description = req.body.description;
    works.date = new Date();
};

exports.DeleteWorks = function (req, res) {

};