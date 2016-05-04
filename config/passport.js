var passport = require('passport');
var LoaclStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var User = require('../models/user');

passport.use('local-login', new LoaclStrategy(
    {
        passReqToCallback: true
    },
    function (req, username, password, done) {
        User.findOne({username: username}, function (err, user) {
            if (err) return done(err);
            // Not found
            if (!user) {
                return done(null, false, req.flash('loginMessage', 'No user with this username found.'));
            }
            // Wrong password
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false, req.flash('loginMessage', 'Wrong username/password.'));
            }
        });
    }
));
