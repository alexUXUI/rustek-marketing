var express = require('express');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var dotenv = require('dotenv');

var router = express.Router();
dotenv.load();


var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://hvcansxxrxjfxl:Ih2ZZwA5x5Uke1DTvyk2YPi__o@ec2-54-243-60-62.compute-1.amazonaws.com:5432/dd3dlr1mhva919?ssl=true'
});


router.post('/', function(req, res, next) {

  console.log('hit the signup route');

  var name = req.body.name
  var email = req.body.email
  console.log(`name: ${ name  }, email ${email}`)

  knex('followers').insert({
    username: name,
    email: email
  }, 'id').then(function(id){
    console.log(id.name, id.email);
  })

  var auth = {
    auth: {
      api_key: process.env.MAILGUN_KEY,
      domain: process.env.MAILGUN_DOMAIN
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: 'alexandergraybennett@gmail.com',
    to: `${ email }`,
    subject: `Hey ${ name }`,
    html: `We <b>greatly</b> appreciate you signing up!
    <br />
    -- Rustek Team
    `,
  }, function (err, info) {
    if (err) console.log('Error: ' + err);
    else console.log('Response: ' + info);
  });

  res.redirect('http://rustek.co/views/thankyou.html');

});

module.exports = router;
