const nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.YA_U,
        pass: process.env.YA_P
    }
})

const sendWelcomeEmail = (email, name) => {
    try {
        const mailOptions = {
            from: '"Evgeni Obukhovski" <evgeni@obukhovski.com>',
            to: email,
            subject: 'Thanks for joining in!',
            text: `Welcome to the app, ${name}.`,
            html: `<b>Welcome to the app, ${name}.</b>`
        }
        transporter.sendMail(mailOptions)
    } catch (e) {
        console.log(e.message)
    }
}

const sendGoodbyeEmail = (email, name) => {
    try {
        const mailOptions = {
            from: '"Evgeni Obukhovski" <evgeni@obukhovski.com>',
            to: email,
            subject: 'Chao!',
            text: `Bye, ${name}.`,
            html: `<b>Bye, ${name}.</b>`
        }
        transporter.sendMail(mailOptions)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}