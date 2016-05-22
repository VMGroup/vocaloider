var marked = require('marked');

exports.index = function (req, res) {
    res.render('index', {});
};

exports.works = function (req, res) {
    res.render('works', {});
};

exports.worksDetail = function (req, res) {
    res.render('works-detail', {pageUrl: req.originalUrl, pageIdentifier: req.params.works_id});
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

    res.render('admin/works', params);
};

exports.admin_resources = function (req, res) {
    var activeTab = 'resources';
    params = {};
    params[activeTab] = 'is-active';

    res.render('admin/resources', params);
};

exports.admin_articles = function (req, res) {
    var activeTab = 'articles';
    params = {};
    params[activeTab] = 'is-active';

    res.render('admin/articles', params);
};