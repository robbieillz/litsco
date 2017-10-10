// HTTP ROUTING
var apiRouter = require('express').Router();
var express = require('express');
var multer = require('multer');
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

var upload = multer();

apiRouter.post('/api/career_submit', upload.single('attachment'), function (req, res) {
    var formData = req.body;
    var file = req.file;

    var mailOptions = {
        from: formData.email,
        to: 'info@litsco.com',
        subject: '[EMPLOYMENT INQUIRY FORM] | ' + formData.position,
        html: '<p>You have receieved and email from ' + formData.first + ' ' + formData.last + ' in reference to the open position on your Careers page, for the <b>' + formData.position + '</b> position.  <br>See attachment for resume/cover letter.</p>' +
        'Applicant Details:' +
        '<ul><li><b>Name: </b> ' + formData.first + ' ' + formData.last + '</li><li><b>Application Position: </b>' + formData.position + '</li><li><b>E-mail: </b><a href="mailto:' + formData.email + '?Subject=LITSCO%20Employment%20Inquiry%20Response" target="_top">' + formData.email + '</a><li></li><b>Phone: </b>' + formData.phone + '<li></li><b>Address: </b>' + formData.address + '</li><li><b>They are interested in this position because: </b>' + formData.message + '</li></ul>' +
        'You can respond directly to this email, or create a new message clicking on the email address listed.',
        attachments: [{
            filename: file.originalname,
            content: file.buffer
        }]
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
