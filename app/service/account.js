'use strict';

const Service = require('egg').Service;

class AccountService extends Service {
  async login(payload) {
    const { ctx, service } = this;

    const user = await ctx.model.User.findOne({ name: payload.username });

    if (!user) {
      ctx.throw(404, '该用户不存在');
    }

    const verifyPsw = await ctx.compare(payload.password, user.password);
    if (!verifyPsw) {
      ctx.throw(404, '密码错误');
    }

    return { token: await service.actionToken.token(user._id) };
  }

  async logout() {
    return;
  }
}

module.exports = AccountService;
