var express = require('express');
var router = express.Router();
var pages = require('./handlers/pages');

router.get('/', function (req, res) {
	res.redirect('/admin/works');
});
router.get('/works', pages.admin_works);
router.get('/resources', pages.admin_resources);

module.exports = router;