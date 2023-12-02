

// const nodemailer = require('nodemailer');
// const demo = (req, res) => {
//     res.send('hello');
// }
// const demo1 = (req, res) => {
//     res.send('hoangviet');
// }


// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'hoangviet',
//       pass: 'ikiuujjvlbysbtgr',
//     },
// });
// const send = (req, res) => {
//     const {to , subject, message} = req.body ;
//     const mailOptions = {
//         from: 'dohoangviet321@gmail.com',
//         to: to,
//         subject: subject,
//         text: message,
//       };
//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.log('Gửi email thất bại: ' + error);
//           res.status(500).send('Gửi email thất bại');
//         } else {
//           console.log('Email đã được gửi: ' + info.response);
//           res.send('Email đã được gửi thành công');
//         }
//       });   
// }

// module.exports= {
//     demo , demo1, send
// }