var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get(['/1', '/2'], function(req, res, next) {
  res.render('scene');
});

module.exports = router;
