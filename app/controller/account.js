'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller 登录管理
 */

class AccountController extends Controller {
  /**
   * @summary 用户登录
   * @description 用户登录
   * @router post /account/login
   * @request body UserLoginRequest *body
   * @response 200 baseResponse 登录成功
   */
  async login() {
    const { ctx, service } = this;

    ctx.validate(ctx.rule.UserLoginRequest);

    const payload = ctx.request.body || {};
    try {
      const res = await service.account.login(payload);
      ctx.helper.success({ ctx, res });
    } catch (error) {
      ctx.helper.failure({ ctx, res: error.message });
    }
  }

  /**
   * @summary 退出登录
   * @description 退出登录
   * @router post /account/logout
   * @response 200 baseResponse 退出成功
   */
  async logout() {
    const { ctx, service } = this;

    await service.account.logout();

    ctx.helper.success({ ctx });
  }
}

module.exports = AccountController;
