const nodemailer = require("nodemailer");
const userServices = require("./user.services");
const sendEmail = async () => {
  const users = await userServices.listUsers();
  for (let i = 0; i < users.length; i++) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GAMIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "youremail@gmail.com",
      to: users[i].email,
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };
    await TransportMail(transporter, mailOptions);
  }
  return "Notified Users";
};

const TransportMail = (transporter, mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = {
  sendEmail,
};
