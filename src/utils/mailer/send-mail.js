import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail'
});

const sendMail = ({
  senderName,
  senderEmail,
  receivers,
  subject,
  plainText,
  html
}) => transporter.sendMail({
  from: senderName
    ? `"${senderName}" <${senderEmail}>`
    : senderEmail,
  to: Array.isArray(receivers)
    ? receivers.join(', ')
    : receivers,
  subject,
  text: plainText || html.replace(/(<([^>]+)>)/ig, ''),
  html
});

export default sendMail;
