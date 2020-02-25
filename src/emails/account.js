const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vicosendey@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vicosendey@hotmail.com',
        subject: 'Goodbye...',
        text: `We are sad to hear you are leaving us, ${name}. But feel free to give us your feedback and help us to improve our app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}