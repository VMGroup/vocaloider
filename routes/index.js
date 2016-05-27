var express = require('express');
var router = express.Router();
var pages = require('./handlers/pages');

/* GET home page. */
router.get('/', pages.index);
router.get('/works', pages.works);
router.get('/works/:work_id', pages.workDetail);
router.get('/resources', pages.resources);
router.get('/resources/:resource_id', pages.resourceDetail);
router.get('/blog', pages.blogList);
router.get('/blog/:entry_id', pages.blogEntry);
router.get('/login', pages.login);

module.exports = router;
