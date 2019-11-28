var express = require('express');
var router = express.Router();
const userModel = require('../models/user');

/* GET user listing. */
router.get('/', function (req, res) {
  if (!req.user) {
    res.send('No auth');
  }
  userModel.findById(req.user._id).then(data => res.send(data));
});

router.post('/', (req, res) => {
  //Do some validation here.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.
  //DO SOME VALIDATION HERE.

  //Modifying body which is actually not a good idea, but I don't care. Actually nevermind I will construct it.
  let user = req.body;
  user.address = {
    'address': user.address,
    'pincode': user.pincode,
    'city': user.city,
    'state': user.state,
    'country': user.country
  };
  user.seller = {
    'sellerAgreement': true
  }

  const newUser = new userModel(user);
  newUser.save()
    .then(() => res.send('user saved'))
    .catch(err => res.send({ status: 'failed', message: err }));
});

//update user prfoile
router.put('/updateUser', (req, res, next) => {
  console.log("hi");
  console.log(req.body.user);
  userModel.updateOne(
    { username: req.body.user.username },
    {
      $set:
      {
        first_name: req.body.user.first_name,
        last_name: req.body.user.last_name,
        password: req.body.user.password,
        address: {
          address: req.body.user.address.address,
          pincode: req.body.user.address.pincode,
          city: req.body.user.address.city,
          state: req.body.user.address.state,
          country: req.body.user.address.country
        }

      }
    }
  ).then(() => res.send('user updated'))
    .catch(err => res.send({ status: 'failed to update', message: err }));

})

module.exports = router;




