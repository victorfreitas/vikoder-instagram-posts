const nodemailer = require('nodemailer')
const { join } = require('path')

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'example@gmail.com',
    pass: 'email password',
  },
})

const options = {
  from: 'From Name <example@gmail.com>',
  to: 'send.email.to@example.com',
  subject: 'Node.js- Nodemailer',
  html: `
    <h1>Nodemailer</h1>
    <p>Lorem ipsum</p>
  `,
  attachments: [
    {
      filename: 'Nodemailer',
      path: join(__dirname, 'attachments/nodemailer.png'),
      contentType: 'image/png',
    },
  ],
}

transporter.sendMail(options, (err, info) => {
  err
    ? console.log(`Error: ${err.message}`)
    : console.log(info)
})
