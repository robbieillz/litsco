// server.js

// set up ======================================================================
var express  		= require('express');
var app      		= express();
var port     		= process.env.PORT || 80;
var apiRoutes 		= require('./app/routes.js');

// configuration ===============================================================

// set up our express application
app.use('/node_modules', express.static('node_modules'));
app.use(express.static(__dirname + '/public'))


// routes ======================================================================
app.use('/', apiRoutes)

app.use('/api/lib', apiRoutes) // Initialize routes to use

// launch ======================================================================
app.listen(port);
console.log('Up and running on Port: ' + port);