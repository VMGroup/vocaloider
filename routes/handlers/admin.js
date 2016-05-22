var Works = require('../../models/works');

exports.AddWorks = function (req, res) {
    console.log(req.body);
    var works = new Works();
    works.title = req.body.title;
    works.description = req.body.description;
    works.date = new Date();
    works.uploader = req.user._id;

    if (typeof req.body['link-name'] === 'string') {
        var link = {};
        link.name = req.body['link-name'];
        link.url = req.body['link-url'];
        link.description = req.body['link-description'];
        works.links.push(link);
    } else {
        for (var i = 0; i < req.body['link-name'].length; i++) {
            var link = {};
            link.name = req.body['link-name'][i];
            link.url = req.body['link-url'][i];
            link.description = req.body['link-description'][i];
            works.links.push(link);
        }
    }

    console.log(works);

    var message = {};
    message.success = '添加成功！';

    req.flash('message', message);

    res.redirect('/admin/works');
};

exports.DeleteWorks = function (req, res) {

};