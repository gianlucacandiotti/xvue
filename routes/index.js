var express = require('express');
var router = express.Router();
var render = require('../utilities/render.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  render(res, 'index');
});

module.exports = router;
