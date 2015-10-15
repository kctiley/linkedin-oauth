var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log(req.user)

//   res.render('index', {
//     title: 'Express',
//     message: 'test 1',
//     user: req.user
//   });
// });

router.get('/', function(req, res, next) {
  console.log("Test1")
  if(req.isAuthenticated()) {
    console.log("Test2")
    unirest.get('https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url)')
      .header('Authorization', 'Bearer ' + req.user.token)
      .header('x-li-format', 'json')
      .end(function (response) {
        console.log("Response....." + response);
        console.log("Response.body...." + response.body);
        res.render('index', { profile: response.body, message: "testmesage", user: req.user});
      })
  } else {
    console.log("Test 3 fail")
    res.render('index', {  });
  }
});



module.exports = router;
