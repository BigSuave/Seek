<<<<<<< HEAD
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/public')).listen(1337);
=======
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var db = mongoose.connection;

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'html');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
>>>>>>> 1d3a3ed7cbad304a8868baf6af3c53c8bd5cb171
