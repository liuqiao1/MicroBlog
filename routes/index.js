var express = require('express');
var router = express.Router();

/* GET home page. */ //规定路径为“ /”的 GET 请求由 routes.index 函数处理
router.get('/', function(req, res, next) {
  //调用视图模板 index，传递 title变量。
 
  res.render('index', { title: 'Express', layout: 'layout'});
});

module.exports = router;
