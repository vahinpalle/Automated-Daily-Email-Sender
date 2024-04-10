const cron = require('node-cron');
const nodemailer = require('nodemailer');
const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vahinayush@gmail.com',
    pass: 'ahuj lkev dznx uaje'
  }
});
const emailOptions = {
  from: 'vahinayush@gmail.com',
  to: 'vahin.palle@gmail.com',
  subject: 'Daily Reminder',
  text: 'Good Morning! This is your daily reminder.'
};
cron.schedule('0 10 * * *', () => {
  emailTransporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.error('error:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
}, {
  timezone: 'America/New_York' 
});
console.log('Email scheduler started.');
