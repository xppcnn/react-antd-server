'use strict';

const { Controller } = require('egg');

/**
 * @Controller 用户管理
 */
class UserController extends Controller {
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx, service } = this;

    // 验证参数
    ctx.validate(ctx.rule.createUserRequest);

    const payload = ctx.request.body || {};

    const res = await service.user.create(payload);

    ctx.helper.success({ ctx, res });
  }

  /**
   * @summary 用户信息
   * @description 获取用户信息
   * @router get /api/user/userInfo
   * @response 200 baseResponse 创建成功
   */
  async getUserInfo() {
    const { ctx, service } = this;
    const token = ctx.request.get('Authorization').substring(7);
    console.log('token',token);
    
    const user_id = ctx.app.jwt.verify(token,ctx.app.config.jwt.secret)
    console.log('user_id',user_id);
    
    const res = await service.user.getUserById(user_id.data._id)
    // 验证参数
    // ctx.validate(ctx.rule.createUserRequest);

    // const payload = ctx.request.body || {};

    // const res = await service.user.create(payload);

    ctx.helper.success({ ctx, res });
  }
}

module.exports = UserController;
