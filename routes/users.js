var express = require('express');
var router = express.Router();
var pages = require('./handlers/pages');
var passport = require('passport');
var users = require('./handlers/users');

/* GET users listing. */
router.get('/', function (req, res) {
    res.redirect('/login');
});

router.post('/signup', passport.authenticate('local-signup'), users.signup);

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/resources',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/logout', users.logout);

module.exports = router;
