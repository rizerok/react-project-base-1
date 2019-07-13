import Router from 'koa-router';
import handleRender from 'middleware/ssr/handle-render';

const router = new Router();

router.get('*', handleRender());

export default router;
