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

exports.login = function (req, res) {
    if (req.user) {
        res.redirect('/resources');
        return;
    }
    var msg = req.flash('error').shift();
    res.render('login', {message: msg});
};


/*******************************
    后台
********************************/
exports.admin_works = function (req, res) {
    var activeTab = 'works';
    params = {};
    params[activeTab] = 'is-active';

    res.render('admin/works', params);
};

exports.admin_resources = function (req, res) {
    var activeTab = 'resources';
    params = {};
    params[activeTab] = 'is-active';

    res.render('admin/resources', params);
};