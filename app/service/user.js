'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 新建用户
   * @param {*} payload
   */
  async create(payload) {
    const { ctx } = this;
    const user = await ctx.model.User.findOne({ username: payload.username });
    if (user) {
      ctx.throw(409, '该用户名已存在!');
    }
    payload.password = await this.ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }
}

module.exports = UserService;
