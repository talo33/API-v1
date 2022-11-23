var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thanh Loc' });
});

router.get('/error', function(req, res, next) {
  res.render('error', { ERROR: 'error from server'});     
});

module.exports = router;
