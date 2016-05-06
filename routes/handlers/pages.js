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
    res.render('resources', {});
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
