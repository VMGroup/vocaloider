var express = require('express');
var router = express.Router();
var pages = require('./handlers/pages');
var admin = require('./handlers/admin');

router.get('/', function (req, res) {
	res.redirect('/admin/works');
});
router.get('/works', pages.admin_works);
router.get('/resources', pages.admin_resources);
router.get('/articles', pages.admin_articles);

router.post('/addWorks', admin.AddWorks);

module.exports = router;