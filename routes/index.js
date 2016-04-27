var express = require('express');
var router = express.Router();
var pages = require('./handlers/pages');

/* GET home page. */
router.get('/', pages.index);
router.get('/productions', pages.productions);


module.exports = router;
