require('dotenv').config();
const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'dapoade11@gmail.com',
    pass: 'aprkmktjazpgzwak',
  },
});

async function sendEmail(toEmail, verificationCode) {
  try {
    await transporter.sendMail({
      from: 'noreply@mHealth.com',
      to: toEmail,
      subject: 'Verify your account',
      html: `<!DOCTYPE>
      <html>
        <body>
          <p>Your authentication code is : </p> 
          <b>${verificationCode}</b>
        </body>
      </html>`,
    });
    return { error: false };
  } catch (error) {
    console.error('send-email-error', error);
    return {
      error: true,
      message: 'Cannot send email',
    };
  }
}

module.exports = { sendEmail };
