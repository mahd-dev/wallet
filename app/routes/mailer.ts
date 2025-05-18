import dotenv from "dotenv";
import nodemailer from "nodemailer";


dotenv.config();

// Setup the transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: process.env.EMAIL_SECURE === "true", 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Transporter verification failed:", error);
  } else {
    console.log("✅ Transporter is ready to send emails");
  }
});


export const sendEmail = async (
  email: string,
  subject: string,
  message: string,
) => {
  try {
    const mailOptions = {
      from: `"My Wallet" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      text: message,
    };

 

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    

    return result;
  } catch (error: any) {
    console.error("❌ Error sending email:", error.message || error);
    if (error.response) {
      console.error("📩 SMTP Response:", error.response);
    }
    if (error.stack) {
      console.error("🧵 Stack Trace:", error.stack);
    }
  }
};

