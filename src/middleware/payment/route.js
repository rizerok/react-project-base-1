import Router from 'koa-router';

import payment from './index';

const paymentRoute = new Router();

paymentRoute.post('/', payment);

export default paymentRoute;
