var express = require('express');
var router = express.Router();
var querystring = require('querystring');
const userModel = require('../models/user');
const passport = require('passport');
var request = require('request');

//temp register
router.post('/register1', (req, res, next) => {
    console.log("Redirect in Users");
    console.log(req.body.username);
    var j = {
      'user': {
        'first_name': req.body.first_name,
        'last_name': req.body.first_name,
        'username': req.body.last_name,
        'password': req.body.username,
        'usertype': req.body.usertype
  
      }
    }
    console.log(j);
  
    request.post({
      url: "http://localhost:3000/users/register",
  
      json: j
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body)
      }
      else {
  
        console.log("error: " + response)
        console.log("response.statusCode: " + response.statusCode)
        console.log("response.statusText: " + response.statusText)
      }
    }
    )
  })
  