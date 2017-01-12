var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'xReact' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('pages/home', { title: 'xReact' });
});

/* GET home page. */
router.get('/test2', function(req, res, next) {
  res.render('pages/home', { title: 'xReact' });
});

module.exports = {
  basePath: '/',
  router: router,
};
