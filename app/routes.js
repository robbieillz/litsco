// HTTP ROUTING
var apiRouter = require('express').Router();
var prodData = require('./data.json')

// Page Routes
// \\// SHELL
apiRouter.get('/', function (req, res){
    res.sendFile('shell.html', {root: './public/html'})
});

apiRouter.use('/', express.static('app', { redirect: false }));

// // Data Sends
// apiRouter.get('/api/lib', function(req, res){
// 	res.json(prodData)
// 	console.log('sending prodData from server', prodData)
// })

// Exports
module.exports = apiRouter;