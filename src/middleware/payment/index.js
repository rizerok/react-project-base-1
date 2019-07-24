/* eslint no-console: "off" */
import { redirectToPayment } from 'constants/responses/ya-money';
import { errorResponse } from 'constants/responses/error';
import createPayment from 'utils/ya-money';

const payment = async (ctx) => {
  const { amount, message } = ctx.request.body;
  await createPayment({ amount, message })
    .then(res => {
      if (res.status === 'ext_auth_required') {
        const url = new URL(res.acs_uri);
        Object.keys(res.acs_params).forEach((key) => {
          url.searchParams.append(key, res.acs_params[key]);
        });
        console.log('url', url.toString());
        ctx.body = redirectToPayment(url.toString());
      }
    })
    .catch(res => {
      console.log(res);
      ctx.body = errorResponse();
    });
};

export default payment;
