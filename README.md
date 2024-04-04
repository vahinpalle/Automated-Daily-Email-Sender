# Automated Dailly Email Sender

This is a Node.js application that is meant to send a scheduled email at 10 AM EST daily with a simple message.

## Install Necessary Packages/Files

### Node.js and NPM

Install [Node.js and NPM](https://nodejs.org/en/download) if they are not installed already

### Clone Github Repository

Navigate to the directory where you want the application to be cloned to in terminal/shell, then run the following command:

```sh
git clone https://github.com/srisairy2/Automated-Daily-Email-Sender.git
```

If the following command doesn't work, then just go to the main page for this repository, click the green button labeled "Code", then copy the HTTP URL given.

### Nodemailer and Node-cron Libraries

Inside the directory where this README.md file is located, run the following code to install the nodemailer and node-cron libraries:

```sh
npm install nodemailer node-cron
```

## Configure Gmail Account to Send Automated Emails

By default, this application is configured to use a gmail account that I have created (ssairy.mailer@gmail.com) to send emails. If you do not wish to change this, then you can skip to the [next section](#application-set-up).

If you wish set up a different account for sending emails, then do the following steps:

- Go to your [Google account page](https://myaccount.google.com/)
- Switch to the account that you want to send automated emails from
- Go to the `Security` Tab
- Turn on `2-step verification`

## Application Set Up
