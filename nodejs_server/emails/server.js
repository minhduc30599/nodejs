var nodemailer = require('nodemailer');

var transpoter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'levanthiduc123@gmail.com',
    pass: 'MinhDuc99'
  }
});

var mailOptions = {
  from: 'levanthiduc123@gmail.com',
  to: 'minhduc3051999@gmail.com',
  subject: 'Sending email using Node.js',
  text: 'first time send email by using nodejs!'
};

transpoter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
})