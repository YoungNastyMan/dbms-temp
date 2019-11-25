var express = require('express');
var router = express.Router();
const userModel = require('../models/user');
const passport = require('passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
  if(!req.user) {
    res.send('No auth');
  }
  userModel.find().then(data => res.send(data));
});

router.post('/', (req, res, next) => {
  //Do some validation here.
  const newUser = new userModel(req.body.user);
  newUser.save()
    .then(() => res.send('user saved'))
    .catch(err => res.send({ status: 'failed', message: err }));
});

router.post('/login', passport.authenticate('local', { successRedirect: '/users/' }));

module.exports = router;
