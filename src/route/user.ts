import Router from '@koa/router';
// const router = new Router({'prefix':'/login'});
const router = new Router({ });

import service from '../service/user';

router.get('/register', service.register)
router.get('/login', service.login)

router.get('/login/users/:id',async (ctx)=>{
  const path = ctx.request.path;
  const id = path.split('/').pop();
  const header = ctx.request.header.authorization;
  console.log('header',header)
  const data = {
    code: 200,
    message: 'users get success',
    data: {
      user: {
        mobile: id,
        name: 'sisi',
        version: 0,
        in: false,
      }
    }
  }
  ctx.body = data;
})

router.post('/login/sms/code', async(ctx)=>{
  const { mobile } = ctx.request.body as any;
  const data = {
    code: 200,
    message: 'success',
    data: {
      mobile
    }
  }
  ctx.body = data;
})
router.post('/login/sms/auth', async(ctx)=>{
  const { mobile, code } = ctx.request.body as any;
  
  const data = {
    code: 200,
    message: 'success',
    data: {
      firstReg: 1,
      sessionID: 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGQ1MjFiNWEyNzNhNDI1YWE2MTZmNjU3MmI5NDYxNTYiLCJ1c2VyX25hbWUiOiIxODIxMDc0NTc1MCIsInBob25lIjoiMTgyMTA3NDU3NTAiLCJleHAiOjE3NDA5OTYyNjAsIm5iZiI6MTcyNTQ0NDI1MH0.ylCZmZGD3prZ9yXVN3Y-kQ3qbcdje6-71cRDVz8yrhc',
      uid: '1111111111',
      mobile: '18210745750',
    }
  }
  ctx.body = data;
})
router.get('/data/merchant/info', async(ctx)=>{
  const data = {
    code: 200,
    data: {
        account: {
            availableBalance: 0,
            balance: 0,
            frozenBalance: 0
        },
        merchant: {
            contactPhone: "15001396643",
            email: "luweiliang92@163.com",
            logoUrl: "https://basic-chat-bucket.oss-cn-beijing.aliyuncs.com/jingnian_logo.jpg?Expires=1725439019&OSSAccessKeyId=TMP.3Kg9X2xT8pJibyGPygnYaxpJRQtJCNsrmEnHsGBiid39jigfMtpV46mnDD8N1Cofmjw6NhVdS5c9Y95354woQ7CzNPD1Re&Signature=80ZZSxKpYZYZEdVHybtJlhn6LxM%3D",
            merchantName: "北京京念科技有限公司",
            registrationTime: "2022-10-09 00:00:00"
        }
    },
    "msg": "Success"
  }
  ctx.body = data;
})
router.put('/users/:id', async(ctx)=>{
  const path = ctx.request.path;
  const id = path.split('/').pop()
  const data = {
    code: 200,
    message: 'success',
    data: {
      id
    }
  }
  ctx.body = data;
})

router.delete('/user/:id', async(ctx)=>{
  const path = ctx.request.path;
  const id = path.split('/').pop()
  const data = {
    code: 200,
    message: 'success',
    data: {
      id
    }
  }
  ctx.body = data;
})

export const get = router.routes()

