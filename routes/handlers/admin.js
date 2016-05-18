var Works = require('../../models/works');

exports.AddWorks = function (req, res) {

    var works = new Works();
    works.title = req.body.title;
    works.description = req.body.description;
    works.date = new Date();
    works.uploader = req.user._id;
    console.log(works);

    var message = {};
    message.success = '添加成功！';

    res.render('admin/works', {message: message});
};

exports.DeleteWorks = function (req, res) {

};