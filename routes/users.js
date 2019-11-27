var express = require('express');
var router = express.Router();
const userModel = require('../models/user');
const passport = require('passport');

/* GET user listing. */
router.get('/', function (req, res, next) {
  console.log("here");
  if(!req.user) {
    res.send('No auth');
  }
  userModel.findById(req.user._id).then(data => res.send(data));
});

//register new user
router.post('/register', (req, res, next) => {
  //Do some validation here.
  const newUser = new userModel(req.body.user);
  newUser.save()
    .then(() => res.send('user saved'))
    .catch(err => res.send({ status: 'failed', message: err }));
});

//update user prfoile
router.put('/updateUser', (req, res, next)=>{
  const updatedUser = new userModel(req.body.user);
  updatedUser.findOneAndUpdate()



})



router.post('/useradded', passport.authenticate('local', { successRedirect: '/users/useradded' }));


module.exports = router;
