import Router from 'koa-router';
import handleRender from 'middleware/ssr/handle-render';

import apiRoute from '../api/route';

const router = new Router();

router.use('/api', apiRoute.routes(), apiRoute.allowedMethods());
router.get('*', handleRender());

export default router;
