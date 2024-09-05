import cors from '@koa/cors';
// import dotenv from 'dotenv';
// dotenv.config();
// // require('dotenv').config();

// console.log('process.env.PORT222',process.env.PORT)

// export default process.env;

// 配置 CORS 选项
 export const corsOptions: cors.Options = {
  origin: '*', // 允许所有域名请求，或指定特定域名
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的 HTTP 方法
  allowHeaders: ['Content-Type', 'X-Request-Id', 'Authorization'], // 允许的请求头
  // exposeHeaders: ['X-My-Custom-Header'], // 允许客户端访问的响应头
};