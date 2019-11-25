var express = require('express');
var router = express.Router();
const userModel = require('../models/user');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

/* GET users listing. */
router.get('/', function (req, res, next) {
  userModel.find().then(data => res.send(data));
});

router.post('/', (req, res, next) => {
  //Do some validation here.
  const newUser = new userModel(req.body.user);
  newUser.save()
    .then(() => res.send('user saved'))
    .catch(err => res.send({ status: 'failed', message: err }));
});

router.post('/login', (req, res, next) => {

});

module.exports = router;
