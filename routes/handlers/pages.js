var marked = require('marked');
var Work = require('../../models/work');

exports.index = function (req, res) {
    res.render('index', {});
};

exports.works = function (req, res) {
    var data = {
        message: {},
        workList: []
    };
    Work.find().populate('uploader').exec(function (err, works) {
        if (err) {
            data.message.error = err;
        } else {
            data.workList = works;
        }

        res.render('works', data);
    });
};

exports.workDetail = function (req, res) {
    var data = {
        message: {},
        workItem: {},
        pageUrl: req.originalUrl,
        pageIdentifier: req.params.work_id
    };

    Work.findById(req.params.work_id, function (err, work) {
        if (err) {
            data.message.error = err;
        } else {
            data.workItem = work;
        }

        res.render('work-detail', data);
    });
};

exports.resources = function (req, res) {
    var activeTab = 'tab1';
    if (req.query.category) {
        activeTab = req.query.category;
    }
    params = {};
    params[activeTab] = 'is-active';
    res.render('resources', params);
};

exports.resourceDetail = function (req, res) {
    res.render('resource-detail', {pageUrl: req.originalUrl, pageIdentifier: req.params.production_id});
};

exports.blogList = function (req, res) {
    res.render('blog-list');
};

exports.blogEntry = function (req, res) {
    blog = {};
    blog.title = '学习日记（一）';
    blog.content = 'I am using __markdown__.';
    blog.content = marked(blog.content);
    res.render('blog-entry', {blog: blog});
};

exports.login = function (req, res) {
    if (req.user) {
        res.redirect('/resources');
        return;
    }
    var msg = req.flash('error').shift();
    res.render('login', {message: {error: msg}});
};


/*******************************
    后台
********************************/
exports.admin_works = function (req, res) {
    var activeTab = 'works';
    params = {};
    params[activeTab] = 'is-active';
    params.message = req.flash('message').shift();

    Work.find().populate('uploader').sort({date: -1}).exec(function (err, data) {
        if (err) {
            params.message.error = err;
        } else {
            params.workList = data;
        }

        res.render('admin/works', params);
    });
};

exports.admin_resources = function (req, res) {
    var activeTab = 'resources';
    params = {};
    params[activeTab] = 'is-active';
    params.resourceList = [];

    res.render('admin/resources', params);
};

exports.admin_articles = function (req, res) {
    var activeTab = 'articles';
    params = {};
    params[activeTab] = 'is-active';

    res.render('admin/articles', params);
};