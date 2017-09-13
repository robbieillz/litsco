// server.js

// set up ======================================================================
var express = require('express');
var app = express();
var port = 8888;
var apiRoutes = require('./app/routes.js');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');
var safeKey = JSON.parse(fs.readFileSync('./safekey.json', 'utf-8'));

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: safeKey.emailUser + '@gmail.com',
        pass: safeKey.emailPass
    }
});

// configuration ===============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// set up our express application
app.use(express.static(__dirname + '/public/'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/scripts', express.static(__dirname + '/public/scripts/'));
app.use('/css', express.static(__dirname + '/public/css/'));
app.use('/html', express.static(__dirname + '/public/html'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));

app.all('/*', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/public/html' });
});

// // routes ======================================================================
app.use('/', apiRoutes);

app.post('/contact', function (req, res) {
    console.log('hi, inside POST of /api/sendcontact');
    var data = req.body;

    var mailOptions = {
        from: data.email,
        to: 'lucksp@gmail.com',
        subject: '[LITSCO CONTACT FORM] Email sent by ' + data.name,
        text: data.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ error: 'Email not sent' });
        } else {
            console.log('Message sent: ' + info.response);
            console.log('Data:' + data.contactName);
            res.json({ success: 'Email has been sent.' });
        }
    });
});

// launch ======================================================================
app.listen(port);
console.log('Up and running on Port: ' + port);
