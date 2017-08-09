var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'

  res.send('respond with a resource');
});

//用户主页
router.get('/users/:user', function(req, res, next) {
  res.send(req.params.user);
});

//用户注册
router.post('/reg', function(req, res, next){
  res.send('user regist');
});

//用户登录 get
router.get('/login', function(req, res, next){
  res.send('user login get');
});

//用户登录 post
router.post('/login', function(req, res, next){
  res.send('user login post');
});

//用户登出 
router.get('/logout', function(req, res, next){
  res.send('user logout');
});


module.exports = router;
