var models = require('../../models');

exports.AddWorks = function (req, res) {
    var works = new models.Works();
    works.title = req.body.title;
    works.description = req.body.description;
    works.date = new Date();
};

exports.DeleteWorks = function (req, res) {

};