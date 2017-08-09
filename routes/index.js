var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //调用视图模板 index，传递 title变量。
  res.render('index', { title: 'Express' });
});

module.exports = router;
