const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail'
  auth: {
    user: 'ssairy.mailer@gmail.com',
    pass: 'zptr vpei pmgm qvfl'
  }
});

// Define the email options
const mailOptions = {
  from: 'ssairy.mailer@gmail.com',
  to: 'srisairy2@gmail.com',
  subject: 'Daily Reminder',
  text: 'Good Morning! This is your daily reminder.'
};

/*

*/

// Schedule the email to be sent every day at 10 AM EST
cron.schedule('0 10 * * *', () => {
  // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error('Error occurred while sending email:', error);
        } else {
        console.log('Email sent:', info.response);
        }
    });
}, {
  timezone: 'America/New_York' // Set the timezone to EST
});



console.log('Email scheduler started.');
