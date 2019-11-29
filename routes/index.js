var express = require('express');
var router = express.Router();
const passport = require('passport');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

router.use(bodyParser.urlencoded({extended: true}))
router.use(methodOverride(function(req,res){
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method 
  }

}))

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("here");
  if(!req.user) {
    res.redirect('/login');
  }
  res.render('home');
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


/*GET update user page */
router.get('/updateUser', function(req, res, next) {
  console.log(req.user);
  res.render('updateUser', { user: req.user });
});

//Login route
router.post('/login', passport.authenticate('local', { successRedirect: '/loginsuccess' }));

//Login page
router.get('/login', (req, res) => res.render('login'));

//Update Profile page
router.get('/updateUser', (req, res) => res.render('updateUser'));

//CRUD Users page
router.get('/crudUsers', (req, res) => res.render('crudUsers'));

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
