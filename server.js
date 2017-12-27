// server.js
// set up ======================================================================
var express = require('express');
var apiRoutes = require('./app/routes.js');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 5000;

// configuration ===============================================================
// set up our express application
app.use(express.static(__dirname + '/src/'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/scripts', express.static(__dirname + '/src/scripts/'));
app.use('/css', express.static(__dirname + '/src/css/'));
app.use('/html', express.static(__dirname + '/src/html'));
app.use('/img', express.static(__dirname + '/src/img'));
app.use('/fonts', express.static(__dirname + '/src/fonts'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/src' });
});

// // routes ======================================================================
app.use('/', apiRoutes);

// launch ======================================================================
app.listen(port);
console.log('Up and running on Port: ' + port);

// Expose app
exports = module.exports = app;
