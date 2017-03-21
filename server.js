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


app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/scripts/materialize', express.static(__dirname + '/scripts/materialize'));
app.use('/html', express.static(__dirname + '/html'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

// // routes ======================================================================
// app.use('/', apiRoutes)

// app.use('/api/lib', apiRoutes) // Initialize routes to use

// launch ======================================================================
app.listen(port);
console.log('Up and running on Port: ' + port);