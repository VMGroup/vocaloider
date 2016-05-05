var express = require('express');
var router = express.Router();
var pages = require('./handlers/pages');

/* GET home page. */
router.get('/', pages.index);
router.get('/productions', pages.productions);
router.get('/productions/:production_id', pages.productionDetail);
router.get('/resources', pages.resources);
router.get('/resources/:resource_id', pages.resourceDetail);
router.get('/login', pages.login);

module.exports = router;
