import dotenv from 'dotenv';
import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import { context } from './extend';
import { get } from './route/user';

dotenv.config();


const app = new Koa();

app.use(context);//扩充ctx;
app.use(bodyparser());
app.use(get);
app.use(context => {
  context.body = context;
})

// Router.get('')
app.listen(process.env.PORT,() => {
  // console.info('\x1b[31m%s\x1b[0m','server success, port: 3000');
  console.log(`server success, http://127.0.0.1:${process.env.PORT}`);
})

