var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/:route', express.static('public'));

router.get('/profile', function(req, res, next) {
  res.render('auth/views/profile');
});

module.exports = router;
