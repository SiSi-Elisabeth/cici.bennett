import Router from '@koa/router';
import fs from 'fs';
import path from 'path';

const router = new Router();

router.get('/avatar', (ctx)=> {
  const filePath = path.join(__dirname, '..', 'files', 'avatar.png');
  fs.readFile(filePath, (err, data) => {
    if(err) {
      // console.error('err',err)
      return;
    }
    // console.log(data)
    const { mtime } = fs.statSync(filePath);
    // ctx.set('last-modified', mtime.toUTCString())
    ctx.set('Content-Type', 'image/png'); // 设置响应头
    ctx.body = data;
  });
 
})

// console.log(fs, path)

export const file = router.routes()
