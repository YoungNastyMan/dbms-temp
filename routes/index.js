var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET registration page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

/*GET login succes page */
router.get('/loginsuccess', function(req, res, next) {
  console.log(req.user);
  if(!req.user) {
    res.render('loginFailure');
  }
  res.render('loginSuccess', { user: req.user });
});


module.exports = router;
