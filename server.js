// server.js

// set up ======================================================================
var express  		= require('express');
var app      		= express();
var port     		= 9000;
var apiRoutes 		= require('./app/routes.js');

// configuration ===============================================================

// set up our express application
app.use(express.static(__dirname + '/public/'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/scripts', express.static(__dirname + '/public/scripts/'));
app.use('/css', express.static(__dirname + '/public/css/'));
app.use('/html', express.static(__dirname + '/public/html'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/public/html' });
});

// // routes ======================================================================
app.use('/', apiRoutes);

// app.use('/api/lib', apiRoutes) // Initialize routes to use

// launch ======================================================================
app.listen(port);
console.log('Up and running on Port: ' + port);