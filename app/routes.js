// HTTP ROUTING
var apiRouter = require('express').Router();
var express = require('express');

// Page Routes
apiRouter.get('/', function (req, res, next){
    res.sendFile('index.html', {root: './public/html'});
});

// apiRouter.use('/', express.static('app', { redirect: false }));

// // Data Sends
// apiRouter.get('/api/lib', function(req, res){
// 	res.json(prodData)
// 	console.log('sending prodData from server', prodData)
// })

// Exports
module.exports = apiRouter;