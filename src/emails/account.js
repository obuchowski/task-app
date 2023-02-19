const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'evgeni@obukhovski.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'evgeni@obukhovski.com',
        subject: 'Chao!',
        text: `Bye, ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}

// sgMail.send({
//     to: 'evgeni@obukhovski.com',
//     from: 'evgeni@obukhovski.com',
//     subject: 'send from app',
//     text: 'Hello World!'
// })