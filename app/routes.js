// HTTP ROUTING
var apiRouter = require('express').Router();
var express = require('express');

// Page Routes
apiRouter.get('/', function (req, res, next) {
    res.sendFile('index.html', { root: './public/html' });
});

// Exports
module.exports = apiRouter;
