const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
require("dotenv").config;

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const registerEmail = async (userEmail, user) => {
  try {
    const emailToken = user.generateRegisterToken();
    let mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "e_comm",
        link: `${process.env.EMAIL_MAIL_URL}`,
      },
    });

    const email = {
      body: {
        name: userEmail,
        intro: "We are happy you signed for us !!!",
        action: {
          instructions:
            "To get validate your account, please confirm your email address: ",
          button: {
            color: "#22BC66",
            text: "Verify Now",
            link: `${process.env.SITE_DOMAIN}verification?t=${emailToken}`,
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, we would love to help",
      },
    };

    let emailBody = mailGenerator.generate(email);

    let message = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: "Wellcom !!!",
      html: emailBody,
    };

    await transporter.sendMail(message);
    return true;
  } catch (error) {

    throw error;
  }
};

module.exports = {
  registerEmail,
};
