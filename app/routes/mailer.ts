import dotenv from "dotenv";
import nodemailer from "nodemailer";

// Load environment variables from .env file
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587, // You can change this if you're using a different provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

export const sendEmail = async (
  email: string,
  subject: string,
  message: string,
) => {
  try {
    const mailOptions = {
      from: `"Your App" <${process.env.EMAIL_USER}>`, // Sender's email address
      to: email, // Receiver's email address
      subject: subject, // Email subject
      text: message, // Email body text
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
