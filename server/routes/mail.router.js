const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const nodemailer = require('nodemailer');
//const SMTPConnection = require('nodemailer/lib/smtp-connection');


const transporter = nodemailer.createTransport( {
    port: 587,
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    auth: {
        user: process.env.MAIL_USERNAME, //from env file
        pass: process.env.MAIL_PASSWORD //from env file
    },
    tls: {
        ciphers:'SSLv3'
    }
});

router.post('/confirmation', rejectUnauthenticated, (req, res) => {
    const mailData = {
        from: process.env.MAIL_USERNAME,
        to: req.user.username,
        subject: 'Thank You for your Application',
        text: 'Thank you for your application to the Results Foundation. Your application has been succesfully recieved. We are excited to review your application and we appreciate that you have taken the time to apply. We will contact you about next steps.',
        html: '<p>Thank you for your application to the Results Foundation. Your application has been succesfully recieved. We are excited to review your application and we appreciate that you have taken the time to apply.</p> <p>We will contact you about next steps.</p><p>Thanks,</p><p>The Results Foundation</p>'
    }
    transporter.sendMail(mailData, (error, info) => {
        if( error ){
            return console.log('error in transporter.sendMail', error);
        } 
        res.send({message:'mail sent', message_id: info.messageId})
    })
})

router.post('/notification', rejectUnauthenticated, (req, res) => {
    console.log('in notification email route');
    const mailData = {
        from: process.env.MAIL_USERNAME,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Application received',
        text: 'A new application has been submitted to the Results Foundation Grant Application Portal.',
        html: '<p>A new application has been submitted to the Results Foundation Grant Application Portal.</p>'
    }
    transporter.sendMail(mailData, (error, info) => {
        if( error ){
            return console.log('error in transporter.sendMail', error);
        } 
        res.send({message:'mail sent', message_id: info.messageId})
    })
})

module.exports = router;