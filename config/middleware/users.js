module.exports = function (app) {
    app.use(function (req, res, next) {
        res.locals.user = req.user;
        next();
    });

    app.use(['/resources', '/works'], function(req, res, next) {
    	if (!req.user) {
            console.log(req.session);
    		res.redirect('/login');
    	}
        return next();
    });
};