const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'brendancwright@gmail.com',
        subject: 'Welcome to my Task App!',
        text: `Welcome to the app, ${name}. Let us know how you like it.`
    });
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'brendancwright@gmail.com',
        subject: 'Goodbye!',
        text: `We are sad to see you go, ${name}! Please give us feedback based on your decision to leave.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}