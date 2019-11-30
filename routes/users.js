var express = require('express');
var axios = require('axios');
var router = express.Router();
const userModel = require('../models/user');

/* GET user listing. */
router.get('/', function (req, res) {
  if (!req.user) {
    res.send('No auth');
  }
  userModel.findById(req.user._id).then(data => res.send(data));
});

router.post('/register', (req, res) => {
  let user = req.body;
  user.address = {
    'address': user.address,
    'pincode': user.pincode,
    'city': user.city,
    'state': user.state,
    'country': user.country
  };
  if (req.body.usertype == "seller") {
    user.usertype = "seller";
    user.seller = {
      'sellerAgreement': true
    }
  }else if (req.body.usertype == "buyer") {
    user.usertype = "buyer";
    user.buyer = {
      'buyerAgreement': true
    }
  }

    // const newUser = new userModel(user);

    console.log(user);

    axios.post('http://localhost:5000/user/register',user)
    .then(() => {
      res.send('user saved');
    }, (error) => {
      console.log(error);
    });


    // console.log(newUser);
    
    // newUser.save()
    //   .then(() => res.send('user saved'))
    //   .catch(err => res.send({ status: 'failed', message: err }));


  });

//update user profile via post
// router.put('/updateUser', (req, res, next) => {
//   console.log("h1 1");
//   if (req.params.id) {
//     return handlePut(req, res);
//   }

//   // don't forget to handle me!
// });

//update user profile
router.put('/updateUser', (req, res, next) => {
  console.log("hi");
  //console.log(req.body.user);
  console.log(req.body.first_name);
  console.log(req.body.username);
  userModel.updateOne(
    { username: req.body.username },
    {
      $set:
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        address: {
          address: req.body.address,
          pincode: req.body.pincode,
          city: req.body.city,
          state: req.body.state,
          country: req.body.country
        }

      }
    }
  ).then(() => res.send('user updated'))
    .catch(err => res.send({ status: 'failed to update', message: err }));

})

module.exports = router;




