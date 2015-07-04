var gcloud = require("gcloud");
var express = require("express");
var mysql = require("mysql");
var app = express();
var connection = mysql.createConnection({
	host : "2001:4860:4864:1:6665:56e8:420c:536c",
	user : "brett.dulan@outlook.com	",
	password : "@naluds12",
	database : "first_test_db"
});
/* Connection to Database */
connection.connect(function(error){
	if(error)
	{
		console.log("MySQL ERROR:" + error);
	}
	else
	{
		console.log("Connected with Database!");
	}
});
// Sample query
// connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
// 	connection.end();
// 	   if (!err)
// 	     	console.log('The solution is: ', rows);
// 	   else
// 	     	console.log('Error while performing Query.');
// 	   });
// });

/*start the server */
app.listen(3000,function(){
console.log("its started on PORT 3000");
});
