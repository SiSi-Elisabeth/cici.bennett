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
            availableBalance: 100,
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
router.get('/goods/query', async(ctx)=>{
  const data = {
    "code": 200,
    "data": {
        "expirationMonths": ["24","36","48"],
        "goodsName": "Tokey资源包",
        "productName": "AI秘书",
        "specifications": ["100","1000","10000","100000"]
    },
    "msg": "Success"
  }
  ctx.body = data;

})
router.get('/order/list', async(ctx)=>{
  const { pageNum, pageSize } = ctx.query as any;
  const data = {
    "code": 200,
    "data": {
        "list": [
            {
                "Order": {
                    "orderId": "1017679360884219904",
                    "userId": "0208fea2910e45498a489bef655be291",
                    "amount": 10,
                    "paymentType": 1,
                    "payStatus": 0
                },
                "OrderDetailsList": [
                    {
                        "orderId": "1017679360884219904",
                        "goodsId": 1,
                        "amount": 10,
                        "specification": "5000000",
                        "expirationMonth": 24,
                        "isValid": false,
                        "startTime": "2024-09-09 14:14:28",
                        "endTime": "2026-09-09 14:14:28"
                    }
                ]
            },
            {
                "Order": {
                    "orderId": "1017640327214800896",
                    "userId": "0208fea2910e45498a489bef655be291",
                    "amount": 10,
                    "paymentType": 1,
                    "payStatus": 0
                },
                "OrderDetailsList": [
                    {
                        "orderId": "1017640327214800896",
                        "goodsId": 1,
                        "amount": 10,
                        "specification": "5000000",
                        "expirationMonth": 24,
                        "isValid": false,
                        "startTime": "2024-09-09 11:39:27",
                        "endTime": "2026-09-09 11:39:27"
                    }
                ]
            },
            {
              "Order": {
                  "orderId": "1017679360884219904",
                  "userId": "0208fea2910e45498a489bef655be291",
                  "amount": 10,
                  "paymentType": 1,
                  "payStatus": 0
              },
              "OrderDetailsList": [
                  {
                      "orderId": "1017679360884219904",
                      "goodsId": 1,
                      "amount": 10,
                      "specification": "5000000",
                      "expirationMonth": 24,
                      "isValid": false,
                      "startTime": "2024-09-09 14:14:28",
                      "endTime": "2026-09-09 14:14:28"
                  }
              ]
          },
          {
              "Order": {
                  "orderId": "1017640327214800896",
                  "userId": "0208fea2910e45498a489bef655be291",
                  "amount": 10,
                  "paymentType": 1,
                  "payStatus": 0
              },
              "OrderDetailsList": [
                  {
                      "orderId": "1017640327214800896",
                      "goodsId": 1,
                      "amount": 10,
                      "specification": "5000000",
                      "expirationMonth": 24,
                      "isValid": false,
                      "startTime": "2024-09-09 11:39:27",
                      "endTime": "2026-09-09 11:39:27"
                  }
              ]
          }
        ],
        "total": 4
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

export const get = router.routes();

