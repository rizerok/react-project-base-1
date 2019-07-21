import Router from 'koa-router';

import contactUsRoute from 'middleware/contact-us/route';

const api = new Router();

api.use('/contact-us', contactUsRoute.routes(), contactUsRoute.allowedMethods());

export default api;
