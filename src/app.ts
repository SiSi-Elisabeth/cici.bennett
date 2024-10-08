import cors from '@koa/cors';
import dotenv from 'dotenv';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { config } from './config';
import { context } from './extend';
import './model';
import { routes } from './route';

dotenv.config()

const app = new Koa();
app.use(cors(config.corsOptions)); //跨域

app.use(bodyParser()); //解析body
app.use(context); //扩充ctx;
app.use(routes); //路由



app.use(async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.status = 404;
      ctx.body = { error: 'Not Found' };
    }
    if (ctx.status === 304) {
      ctx.status = 304;
      ctx.body = { error: '304' };
    }
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { error: err.message };
  }
});

// Router.get('')
app.listen(config.port,() => {
  // console.info('\x1b[31m%s\x1b[0m','server success, port: 3000');
  console.log(`server success, http://127.0.0.1:${config.port}`);
})

