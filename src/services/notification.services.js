require("dotenv").config();

const nodemailer = require("nodemailer");
const userServices = require("./user.services");
const sendEmail = async () => {
  console.log("-----sendEmail ---");
  const users = await userServices.listUsers();

  for (let i = 0; i < users.length; i++) {
    //console.log("sendEmail ::users ::", users[i]);
    console.log(
      "sendEmail :: process.env.GAMIL_ADDRESS ::",
      process.env.GMAIL_ADDRESS
    );
    console.log(
      "sendEmail :: process.env.GMAIL_PASSWORD ::",
      process.env.GMAIL_PASSWORD
    );
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: users[i].email,
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };
    await TransportMail(transporter, mailOptions);
  }
  return "Notified Users";
};

const TransportMail = (transporter, mailOptions) => {
  console.log(
    "TransportMail :: transporter, mailOptions",
    transporter,
    mailOptions
  );
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
