import Router from 'koa-router';

import contactRequest from './contact-request';

const contactUsRoute = new Router();

contactUsRoute.post('/', contactRequest);

export default contactUsRoute;
