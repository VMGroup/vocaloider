var Work = require('../../models/work');

exports.AddWork = function (req, res) {
    console.log(req.body);
    var work = new Work();
    work.title = req.body.title;
    work.description = req.body.description;
    work.date = new Date();
    work.uploader = req.user._id;
    work.av = req.body.av

    if (typeof req.body['link-name'] === 'string') {
        var l = {};
        l.name = req.body['link-name'];
        l.url = req.body['link-url'];
        l.description = req.body['link-description'];
        work.links.push(l);
    } else {
        for (var i = 0; i < req.body['link-name'].length; i++) {
            var link = {};
            link.name = req.body['link-name'][i];
            link.url = req.body['link-url'][i];
            link.description = req.body['link-description'][i];
            work.links.push(link);
        }
    }

    console.log(work);
    var message = {};
    Work.create(work, function (err) {
        if (err) {
            console.log(err);
            message.error = err;
        } else {
            message.success = '添加成功！';
        }

        req.flash('message', message);
        res.redirect('/admin/works');
    });
};

exports.DeleteWork = function (req, res) {

};