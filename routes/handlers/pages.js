exports.index = function (req, res) {
    res.render('index', {});
};

exports.productions = function (req, res) {
    res.render('productions', {});
};

exports.productionDetail = function (req, res) {
        res.render('production-detail', {pageUrl: req.originalUrl, pageIdentifier: req.params.production_id});
};

exports.resources = function (req, res) {
        res.render('resources', {});
};
