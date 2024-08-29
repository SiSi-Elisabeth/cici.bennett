import Router from '@koa/router';


const router = new Router();

router.get('/users',async (ctx)=>{
  const data = {
    msg: '查询成功！',
    list: [
      {
        busniess:'MGR',
        name: 'CICI',
        version: 0,
        in: false,
      }
    ]
  }
  ctx.body = data;
})

export const get = router.routes()

