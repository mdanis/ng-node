var express = require('express');
var app = express();
var mysql = require('mysql');
var port  	 = process.env.PORT || 8081; 
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
//console.log(__dirname)
var database = require('./config/database'); 
var connection = mysql.createConnection(database.dbConfig);
connection.connect(); 	// connect to mysqlDB  
app.use('/public', express.static('public'));
app.use(express.static(__dirname + '/public')); 
require('./application/controllert/jsonController.js')(app,connection);
//require('./application/model/jsonModel.js')(app,connection);
//require('./application/model/jsonModel.js')(app,connection);
app.get('/', function(req, res) {
               var siteUrl = req.protocol + '://' + req.get('host');
		res.sendfile('views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
app.listen(port);
console.log("App listening on port " + port);
