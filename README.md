# Automated Daily Email Sender

This app sends an email everyday at 10 AM EST with a message

### My Approach and the Decisions Made

For this project, I started by learning how to use the nodemailer and node-cron libraries. I decided to do so by reading the documentation for each library. Once I had done that, I moved on to actually writing the code for the application, which is in `sender.js`.

During development, I made a choice to print a confirmation message after each email sent. This lets users know that the application is operating correctly. In order to help users determine whether the application is accomplishing their goals, I also decided to handle issues by emailing the error status.

## Install Necessary Packages/Files

### Node.js and NPM

Install [Node.js and NPM](https://nodejs.org/en/download) 

### Clone Github Repository

Navigate to where you want the app to be cloned into in terminal, then run the following command:

```sh
git clone https://github.com/vahinpalle/Automated-Daily-Email-Sender.git
```


### Nodemailer and Node-cron Libraries

Run the following code to install the nodemailer and node-cron libraries:

```sh
npm install nodemailer node-cron
```


## Start Sending Emails

CD to this directory in terminal and run the following command to run the application:

```sh
npm start
```

If that does not work then run the following command instead:

```sh
node sender
```
