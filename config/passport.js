var passport = require('passport');
var LoaclStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var User = require('../models/user');

passport.use('local-login', new LoaclStrategy(
    function (username, password, done) {
        User.findOne({username: username}, function (err, user) {
            if (err) return done(err);
            if (!user) return done(null, false);
        });
    }
));
