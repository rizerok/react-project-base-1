import Router from 'koa-router';

import contactUsRoute from 'middleware/contact-us/route';
import paymentRoute from 'middleware/payment/route';

const api = new Router();

api.use('/contact-us', contactUsRoute.routes(), contactUsRoute.allowedMethods());
api.use('/payment', paymentRoute.routes(), paymentRoute.allowedMethods());

export default api;
