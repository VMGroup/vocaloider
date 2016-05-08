var express = require('express');
var router = express.Router();
var pages = require('./handlers/pages');

router.get('/works', pages.admin_works);

module.exports = router;