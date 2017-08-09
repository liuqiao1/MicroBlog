var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var hello = require('./routes/hello');

var app = express();

// view engine setup
// 表明要使用的模板引擎是 ejs，页面模板在 views 子目录下。
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
// 将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。
//http://localhost:3000/css/style.css
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
//app.use('/user/:username', users);

app.use('/hello', hello);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;

  //通过调用next()，会将路由控制权转移给后面的规则，
  next(err);
});

// error handler
// this middleware will be executed for every request to the app
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
