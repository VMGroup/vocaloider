exports.signup = function (req, res) {
    // console.log(req.user);
    res.json({
        status: 'ok',
        user: req.user.username
    });
};

exports.logout = function (req, res) {
    req.logout();

    res.redirect('/');
};
