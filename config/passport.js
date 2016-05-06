var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var User = require('../models/user');

module.exports = function (passport) {
    // Session setup
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // 注册
    passport.use('local-signup', new LocalStrategy(
        {
            passReqToCallback: true
        },
        function (req, username, password, done) {
            process.nextTick(function () {
                User.findOne({username: username}, function (err, user) {
                    console.log(err, user);
                    if (err) return done(err);

                    // Username has already been taken
                    if (user) {
                        return done(null, false);
                    } else {
                        var newUser = new User();
                        newUser.username = username;
                        newUser.password = password;
                        newUser.save(function (err) {
                            if (err) throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }
    ));

    // 登录
    passport.use('local-login', new LocalStrategy(
        {
            passReqToCallback: true
        },
        function (req, username, password, done) {
            if (req.user) {
                return done(null, req.user);
            }
            User.findOne({username: username}, function (err, user) {
                if (err) return done(err);
                // Not found
                if (!user) {
                    console.log(err, user);
                    return done(null, false, {message: '用户不存在。'});
                }
                // Wrong password
                if (!bcrypt.compareSync(password, user.password)) {
                    return done(null, false, {message: '用户名／密码错误。'});
                }
                return done(null, user);
            });
        }
    ));
};
