var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
   title: 'Sudipto Ghosh' ,
   email: 'mailto:sudiptog81@outlook.com' ,
   creator: 'Sudipto Ghosh',
   git: '//cdn.rawgit.com/sudiptog81/sudiptoghosh/master/'
  });
});

module.exports = router;