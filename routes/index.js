var express = require('express');
var router = express.Router();
const userModel = require("./users");
const nodemailer = require('nodemailer');

// Nodemailer setup (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yft7474@gmail.com',    // Replace with your email
    pass: 'nrin upnf uqsx gfsk',      // Replace with your email password or App password
  }
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// POST endpoint to handle form submission
router.post("/send", async function(req, res) {
  // Create a new user message in MongoDB
  const createdmessage = await userModel.create({
    name: req.body.name,
    company: req.body.company,
    email: req.body.email,
    description: req.body.description,
  });
  
  console.log(createdmessage);

  // Set up email options (what will be sent to your email)
  const mailOptions = {
    from: 'yft7474@gmail.com',  // Your email address
    to: 'dheerajharode2003@gmail.com',    // Your email address or recipient email
    subject: 'New Message from Contact Form',  // Email subject
    text: `You have a new message from the website contact form.
      Name: ${createdmessage.name}
      Company: ${createdmessage.company}
      Email: ${createdmessage.email}
      Message:
      ${createdmessage.description}
    `,  // The message content
  };

  // Send email after message is created
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  // Respond back to the user (rendering the index page, can be replaced with a response message)
  res.render('index');
});

module.exports = router;
