import Router from '@koa/router';
import { file } from './files';
import { get } from './user';


const router = new Router();

router.use(file);

router.use(get)

export const routes = router.routes();