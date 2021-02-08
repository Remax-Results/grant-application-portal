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

router.post('/confirmation', (req, res) => {
    const mailData = {
        from: process.env.MAIL_USERNAME,
        to: req.user.username,
        subject: 'Thank You for your Application',
        text: 'Thank you for your application, we will be in touch!'
    }
    transporter.sendMail(mailData, (error, info) => {
        if( error ){
            return console.log('error in transporter.sendMail', error);
        } 
        res.send({message:'mail sent', message_id: info.messageId})
    })
})

module.exports = router;