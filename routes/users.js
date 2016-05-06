var express = require('express');
var router = express.Router();
var pages = require('./handlers/pages');
var passport = require('passport');
var users = require('./handlers/users');

/* GET users listing. */
router.get('/', function (req, res) {
    res.redirect('/login');
});

router.post('/signup', passport.authenticate('local-signup', {
    failureFlash: true
}), users.signup);

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/resources',
    failureRedirect: '/login',
    failureFlash: true
}));

module.exports = router;
