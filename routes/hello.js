var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello world');
  //next();
});

router.get('/test', function(req, res, next) {
  res.send('hello world again!');
  console.log('hello world again!');
});

//发布一条微博
router.post('/post', function(req, res, next) {
  res.send('post a blog');
  //console.log('hello world again!');
});


module.exports = router;
