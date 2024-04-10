//Import the node-cron module for scheduling tasks and nodemailer for sending emails
const cron = require('node-cron');
const nodemailer = require('nodemailer');

//Create an email transporter object using Nodemailer to handle the sending of emails
//This configuration is for a Gmail account
const emailTransporter = nodemailer.createTransport({
  service: 'gmail', //Specify using Gmail as the email service
  auth: {
    user: 'vahinayush@gmail.com', //Your Gmail email address
    pass: 'ahuj lkev dznx uaje' //Your Gmail password
  }
});

//Email options specifying the sender, recipient, subject, and body of the email
const emailOptions = {
  from: 'vahinayush@gmail.com', //sender email address
  to: 'vahin.palle@gmail.com', //recipient email address
  subject: 'Daily Reminder', //subject line of the email
  text: 'Good Morning! This is your daily reminder.' //plain text body of the email
};

//Schedule a task using 'node-cron' to send an email at 10:00 AM every day
cron.schedule('0 10 * * *', () => {
  emailTransporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.error('error:', error); //log an error if the email sending fails
    } else {
      console.log('Email sent successfully:', info.response); //log a success message if the email is sent
    }
  });
}, {
  timezone: 'America/New_York' //specify the timezone for the scheduled task
});

console.log('Confirmation message'); //log a message when the scheduler starts
