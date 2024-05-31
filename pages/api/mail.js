const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "hi.victorb@gmail.com", // Change to your recipient
  from: "hi.victorb@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });

// export default function handler(req, res) {
//   const body = JSON.parse(req.body);

//   const message = `
//     Message: ${body.message}\r\n
//     Email: ${body.email}\r\n
//     FullName: ${body.fullName}\r\n
//     FullName: ${body.phoneNumber}
//   `

//   const data = {
//     to: 'hi.victorb@gmail.com',
//     from: 'hi.victorb@gmail.com',
//     subject: 'New Project Proposal',
//     text: message,
//     html: message.replace(/\r\n/g, '<br>')
//   }

//   mail.send(data)

//   res.status(200).json({ status: 'Ok' })
// }
