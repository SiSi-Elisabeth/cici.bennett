import { Context, Next } from "koa";

export const context = async (ctx: Context, next: Next)=> {
  ctx.success = () => {
    
  }
  next();
}