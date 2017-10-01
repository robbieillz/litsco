// HTTP ROUTING
var apiRouter = require('express').Router();
var express = require('express');
var fs = require('fs');
var safeKey = JSON.parse(fs.readFileSync('./safekey.json', 'utf-8'));
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    pool: true,
    host: safeKey.emailHost,
    port: safeKey.emailPort,
    secure: true,
    auth: {
        user: safeKey.emailUser,
        pass: safeKey.emailPass
    }
});
apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

// Page Routes
apiRouter.get('/', function (req, res, next) {
    res.sendFile('index.html', { root: './public/html' });
});

apiRouter.post('/api/contact', function (req, res) {
    var data = req.body;
    var mailOptions = {
        from: data.email,
        to: 'info@litsco.com',
        subject: '[LITSCO CONTACT FORM] Email sent by ' + data.name,
        text: data.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json(
                { 
                    info: 'Email not sent'
                }, {
                    error: error
                });
        } else {
            console.log('Message sent: ' + info.response);
            console.log('Data sent:' + data);
            res.json(
                {
                    success: 'Email has been sent.'
                }, {
                    response: info.response
                }, {
                    data: data
                });
        }
    });
});

apiRouter.post('/api/career_submit', function (req, res) {
    var data = req.body;
    var mailOptions = {
        from: data.email,
        to: 'info@litsco.com',
        subject: '[LITSCO CONTACT FORM] Email sent by ' + data.name,
        text: data.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json(
                { 
                    info: 'Email not sent'
                }, {
                    error: error
                });
        } else {
            console.log('Message sent: ' + info.response);
            console.log('Data sent:' + data);
            res.json(
                {
                    success: 'Email has been sent.'
                }, {
                    response: info.response
                }, {
                    data: data
                });
        }
    });
});
// Exports
module.exports = apiRouter;
