var express = require('express');
var router = express.Router();
var pages = require('./handlers/pages');

/* GET users listing. */
router.get('/', function (req, res) {
    res.redirect('/login');
});

module.exports = router;
