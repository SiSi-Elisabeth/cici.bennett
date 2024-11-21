class UserService {
  async register (ctx) {
    ctx.body = {message:'注册成功'}
  }

  async login (ctx) {
    ctx.body = '登录成功'
  }
}

export default new UserService();