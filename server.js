// server.js

// set up ======================================================================
var express = require('express');
var app = express();
var port = 9000;
var apiRoutes = require('./app/routes.js');
var nodemailer = require('nodemailer');
var fs = require('fs');
var bodyParser = require('body-parser');
var safeKey = JSON.parse(fs.readFileSync('./safekey.json', 'utf-8'));

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

// configuration ===============================================================
// set up our express application
app.use(express.static(__dirname + '/public/'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/scripts', express.static(__dirname + '/public/scripts/'));
app.use('/css', express.static(__dirname + '/public/css/'));
app.use('/html', express.static(__dirname + '/public/html'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/public/html' });
});

// // routes ======================================================================
app.use('/', apiRoutes);

app.post('/api/contact', function (req, res) {
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

// launch ======================================================================
app.listen(port);
console.log('Up and running on Port: ' + port);

// Expose app
exports = module.exports = app;