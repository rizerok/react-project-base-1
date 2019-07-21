/* eslint no-console: "off" */
import { contactUsSuccess } from 'constants/responses/success';
import { errorResponse } from 'constants/responses/error';
import sendMail from 'utils/mailer/send-mail';

const contactRequest = async (ctx) => {
  if (!process.env.DOMAIN_NAME) throw Error('Need set DOMAIN_NAME env variable');
  if (!process.env.ADMIN_EMAIL) throw Error('Need set ADMIN_EMAIL env variable');

  const { name, phone, email } = ctx.request.body;
  await sendMail({
    senderName: 'Notifier',
    senderEmail: `noreply@${process.env.DOMAIN_NAME}`,
    receivers: process.env.ADMIN_EMAIL,
    subject: 'New contact us request',
    html: `<b>${name}</b>: ${email}, ${phone}`
  })
    .then(res => {
      console.log(res);
      ctx.body = contactUsSuccess();
    })
    .catch(res => {
      console.log(res);
      ctx.body = errorResponse();
    });
};

export default contactRequest;
