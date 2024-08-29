import dotenv from 'dotenv';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { context } from './extend';
import { routes } from './route';

dotenv.config();


const app = new Koa();

app.use(context); //扩充ctx;
app.use(bodyParser()); //解析body
app.use(routes); //路由
app.use(context => {
  context.body = context;
})

// Router.get('')
app.listen(process.env.PORT,() => {
  // console.info('\x1b[31m%s\x1b[0m','server success, port: 3000');
  console.log(`server success, http://127.0.0.1:${process.env.PORT}`);
})

