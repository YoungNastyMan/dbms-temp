var express = require('express');
var router = express.Router();
const passport = require('passport');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));

router.use(bodyParser.urlencoded({extended: true}))

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log("here");
//   if(!req.user) {
//     res.redirect('/login');
//   }
//   res.render('home');
// });


// router.get('/search', function (req, res, next) {
//   res.render('search2',{ book: req.book });
// });
router.get('/', (req, res) => {
  var curBook = [];
  var curUser = [];
  res.render('search2', {book: curBook, user : undefined})
});

router.get('/searchAfterLogin', (req, res) => {
  var curBook = [];
  res.render('search2', {book: curBook, user: req.user});
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
  var user = {};
  res.render('bookPage', {book: [], user : user});
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

//CRUD Books By User page
router.get('/crudReviews', (req, res) => res.render('crudReviews',{ review: [] }));

//Update/ Edit Users page
router.get('/update-edit-buyer-seller', (req, res) => res.render('updateEditBuyerSeller'));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
