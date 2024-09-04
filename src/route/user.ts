import Router from '@koa/router';
const router = new Router({'prefix':'/user'});

import service from '../service/user';

router.get('/register', service.register)
router.get('/login', service.login)

router.get('/users',async (ctx)=>{
  const data = {
    code: 200,
    message: 'users get success',
    data: {
      user: {
        busniess:'MGR',
        name: 'sisi',
        version: 0,
        in: false,
      }
    }
  }
  ctx.body = data;
})

router.get('/api/data', async(ctx)=>{
  const data = {
    msg:'get success',
    value: 'sisi',
    name: 'get'
  }
  ctx.body = data;
})

router.post('/api/data', async(ctx)=>{
  const data = {
    msg: 'post success',
    value: 'sisi',
    name: 'post'
  }
  ctx.body = data;
})

router.put('/api/data', async(ctx)=>{
  const data = {
    msg: 'put success',
    value: 'sisi',
    name: 'put'
  }
  ctx.body = data;
})

router.delete('/api/data', async(ctx)=>{
  const data = {
    msg: 'delete success',
    value: 'sisi',
    name: 'delete'
  }
  ctx.body = data;
})

export const get = router.routes()

