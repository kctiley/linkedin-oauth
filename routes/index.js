var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', function(req, res, next) {
  console.log(req.user)
  console.log('index js firing...')
  res.render('index', {
    title: 'Express',
    message: 'test 1',
    user: req.user
  });
});


module.exports = router;
