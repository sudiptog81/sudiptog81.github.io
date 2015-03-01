var express = require('express');
var router = express.Router();
// var sendgrid  = require('sendgrid')(api_user, api_key);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
   title: 'Sudipto Ghosh' ,
   email: 'mailto:sudiptog81@outlook.com' ,
   creator: 'Sudipto Ghosh',
   git: '//sudiptog81.github.io/'
  });
});

/* GET clock */
router.get('/clock/', function(req, res, next) {
  res.render('clock', {
   title: 'Clock' ,
   email: 'mailto:sudiptog81@outlook.com' ,
   creator: 'Sudipto Ghosh',
   git: '//sudiptog81.github.io/'
  });
});

/* GET rainbow */
router.get('/rainbow/', function(req, res, next) {
  res.render('rainbow', {
   title: 'Rainbow' ,
   email: 'mailto:sudiptog81@outlook.com' ,
   creator: 'Sudipto Ghosh',
   git: '//sudiptog81.github.io/'
  });
});

module.exports = router;
