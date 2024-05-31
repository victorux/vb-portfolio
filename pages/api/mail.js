const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Message: ${body.message}\r\n
    Email: ${body.email}\r\n
    FullName: ${body.fullName}\r\n
    FullName: ${body.phoneNumber}
  `;

  const data = {
    to: "hi.victorb@gmail.com",
    from: "hi.victorb@gmail.com",
    subject: "New Project Proposal",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await mail.send(data);

  res.status(200).json({ status: "Ok" });
};
