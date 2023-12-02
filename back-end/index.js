const express = require('express');
const nodemailer = require('nodemailer');
// const router = require('./router/router')
const app = express();
const port = 9000;
var cors = require('cors');
app.use(cors());
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies



const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dohoangviet321@gmail.com',
    pass: 'ikiuujjvlbysbtgr'
  },
});

app.post('/send', (req, res) => {
  const {message} = req.body;

  const mailOptions = {
    from: 'dohoangviet321@gmail.com',
    to: 'mytran.14082004@gmail.com',
    subject: "Kỉ niệm 1 năm",
    text: message,
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Gửi email thất bại: ' + error);
      res.status(500).send('Gửi email thất bại');
    } else {
      console.log('Email đã được gửi: ' + info.response);
      res.send('Email đã được gửi thành công');
    }
  });
});


app.listen(port, () => {
  console.log(`Máy chủ đang lắng nghe tại cổng ${port}`);
});