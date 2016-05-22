var Works = require('../../models/works');

exports.AddWorks = function (req, res) {
    console.log(req.body);
    var works = new Works();
    works.title = req.body.title;
    works.description = req.body.description;
    works.date = new Date();
    works.uploader = req.user._id;
    console.log(works);

    var message = {};
    message.success = '添加成功！';

    req.flash('message', message);

    res.redirect('/admin/works');
};

exports.DeleteWorks = function (req, res) {

};