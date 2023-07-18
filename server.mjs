import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import cors from 'cors'
import nodemon from 'nodemon';

const app = express();

const PORT = process.env.PORT || 4050;

app.use(express.json());
app.use(cors()); 


app.post('/send-email',(req,res)=>{
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'denyysbelikov@gmail.com',
      pass: 'omwatdoqlwzgytda'
    }
  });
  const mailOptions = {
    from: req.body.email,
    to: req.body.email,
    subject: `Welcome to our family , ${req.body.username}`,
    html: `<h2 style="font-size:12">Welcome, ${req.body.username}!</h2><br>

    <p>Welcome to Createx! We are delighted that you have registered with us. Createx is an innovative online course platform that will help you develop your skills and unleash your creative potential. We offer a wide range of courses, experts, and the opportunity to interact with other students. We are ready to assist you in achieving your goals and aspirations. Welcome to Createx!</p> <br>
    
    <p>Best regards,</p> <br>
    <p>The Createx Team </p>`
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Ошибка при отправке письма:', error);
    } else {
      console.log('Письмо успешно отправлено!', info);
    }
  });
});






app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
