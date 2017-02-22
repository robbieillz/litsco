// HTTP ROUTING
var apiRouter = require('express').Router();

// Page Routes
// \\// SHELL
apiRouter.get('/', function (req, res){
    res.sendFile('shell.html', {root: './public/html'})
});

// Exports
module.exports = apiRouter;