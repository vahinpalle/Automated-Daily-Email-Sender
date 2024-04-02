const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail'
  auth: {
    user: 'yourEmail@example.com',
    pass: 'yourEmailPassword'
  }
});

// Define the email options
const mailOptions = {
  from: 'yourEmail@example.com',
  to: 'recipient@example.com',
  subject: 'Daily Reminder',
  text: 'Good Morning! This is your daily reminder.'
};
