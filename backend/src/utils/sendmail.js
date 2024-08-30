import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const sendMail = async (email, otp) => {
  // transporter - configuration of admin/user to send mail from
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   service: "gmail",
  //   auth: {
  //     user: process.env.NODEMAILER_EMAIL,
  //     pass: process.env.NODEMAILER_PASSWORD,
  //   },
  // });

// const transporter = nodemailer.createTransport(
//   `smtp://${process.env.NODEMAILER_EMAIL}:${process.env.NODEMAILER_PASSWORD}@hothousenorthwood.com:587`
// );

const transporter = nodemailer.createTransport({
  host: "mail.hothousenorthwood.com", // Your mail server's host
  port: 587,                      // Typically 587 for secure transmission with STARTTLS, or 465 for SSL
  secure: false,                  // Set `true` for port 465, `false` for other ports
  auth: {
    user: process.env.NODEMAILER_EMAIL,   // Your email address
    pass: process.env.NODEMAILER_PASSWORD // Your email password
  }
});

  const templatePath = path.join(__dirname, `../views/otp.ejs`);

  let data = await ejs.renderFile(templatePath, { email, otp });

  let mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Hot House Pizza Otp",
    html: data,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      } else {
        return resolve("Otp Sent Successfully" + info.response);
      }
    });
  });
};
