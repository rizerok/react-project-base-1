import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { resolve } from 'path';

require('dotenv').config();

const dkim = {
  domainName: process.env.DOMAIN_NAME,
  keySelector: process.env.MAIL_KEY_SELECTOR,
  privateKey: readFileSync(resolve('private-dkim.txt'), 'utf8')
};

const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
  dkim
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
