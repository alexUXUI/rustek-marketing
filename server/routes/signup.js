var express = require('express');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var dotenv = require('dotenv');
var router = express.Router();

dotenv.load();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hit send route');

  var auth = {
    auth: {
      api_key: process.env.MAILGUN_KEY,
      domain: process.env.MAILGUN_DOMAIN
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: 'alexandergraybennett@gmail.com',
    to: 'alexandergraybennett@gmail.com', // An array if you have multiple recipients.
    subject: 'Hey you, foooooo!',
    text: 'Getting closer man',
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
    }
    else {
      console.log('Response: ' + info);
    }
  });
  res.render('index', { title: 'Email Sent' });
});

module.exports = router;
