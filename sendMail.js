var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lanregiwa61@gmail.com',
        pass: 'giwa'
        //password is intentionally left incorrect.
    } 
});

var mailOptions = {
    from: 'lanregiwa61@gmail.com',
    to: 'lanrey4ril@gmail.com',
    subject: 'Teaching nodemailer',
    text: `Teaching how to use the nodemailer package in node`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});