var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}));

//以上代码通过 module.exports 输出了创建的数据库连接，在后面的小节中我们会用
//到这个模块。由于模块只会被加载一次，以后我们在其他文件中使用时均为这一个实例。