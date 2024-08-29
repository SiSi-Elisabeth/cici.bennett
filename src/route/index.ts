import Router from '@koa/router';
import { get } from './user';

const router = new Router();

router.use(get)

export const routes = router.routes();