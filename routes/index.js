var express = require('express');
var router = express.Router();
const passport = require('passport');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

app.use(express.static(__dirname + '/public'));

router.use(bodyParser.urlencoded({extended: true}))
router.use(methodOverride(function(req,res){
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method 
  }

}));

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("here");
  if(!req.user) {
    res.redirect('/login');
  }
  res.render('home');
});

// router.get('/search', function (req, res, next) {
//   res.render('search2',{ book: req.book });
// });
router.get('/search', (req, res) => {
  var curBook = [];
  res.render('search2', {book: curBook})
});

/*/!*Get search page *!/
router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Express' });
});*/

/* GET registration page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

/*GET login success page */
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

router.get('/bookPage', function(req, res) {
  res.render('bookPage', {book: []});
});

//Login page
router.get('/login', (req, res) => res.render('login'));

// //Update Profile page
// router.get('/updateUser', (req, res) => res.render('updateUser'));

/*GET view profile */
router.get('/viewProfile', function(req, res, next) {
  //console.log(req.user);
  res.render('viewProfile', { user: req.user });
});

//CRUD Users page
router.get('/crudUsers', (req, res) => res.render('crudUsers'));

//CRUD Users test page
router.get('/crudUsersTest', (req, res) => res.render('crudUsersTest',{ user: req.user }));

//CRUD Books By User page
router.get('/crudBooksBySeller', (req, res) => res.render('crudBooksBySeller',{ book: [], user: req.user}));

//Update/ Edit Users page
router.get('/update-edit-buyer-seller', (req, res) => res.render('updateEditBuyerSeller'));

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
