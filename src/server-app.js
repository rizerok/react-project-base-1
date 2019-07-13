// node
import path from 'path';
// Koa
import Koa from 'koa';
import serve from 'koa-static';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
// middleware
import router from 'middleware/router';

const serverApp = new Koa();

serverApp.use(logger());
serverApp
  .use(serve(path.resolve('public')))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

export default serverApp;
