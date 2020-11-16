"use strict";

const Controller = require("egg").Controller;

/**
 * @Controller 菜单管理
 */
class MenuController extends Controller {
  /**
   * @summary 获取菜单
   * @description 获取用户菜单
   * @router get /api/user/menu
   * @response 200 baseResponse 创建成功
   */
  async getMenu() {
    const { ctx } = this;

    // 验证参数
    // ctx.validate(ctx.rule.createUserRequest);

    // const payload = ctx.request.body || {};

    // const res = await service.user.create(payload);
    const res = [
      {
        id: 1,
        path: "/index",
        icon: "home",
        name: "首页",
        sort: 1,
        parentId: 0,
        level: 1,
        children: null,
      },
      {
        id: 2,
        path: "/shop",
        icon: "shopping",
        name: "店铺管理",
        sort: 1,
        parentId: 0,
        level: 1,
        children: null,
      },
      {
        id: 3,
        name: "商品管理",
        path: "/goods",
        icon: "menuUnfold",
        sort: 10,
        parentId: 0,
        level: 1,
        children: [
          {
            id: 31,
            name: "商品列表",
            path: "/goods/list",
            icon: "ArrowDown",
            sort: 1,
            parentId: 1,
            level: 2,
          },
          {
            id: 32,
            name: "分类列表",
            path: "/goods/classification",
            icon: "user",
            sort: 2,
            parentId: 1,
            level: 2,
          },
        ],
      },
      {
        id: 4,
        path: "/order",
        icon: "moneyCollect",
        name: "订单管理",
        sort: 1,
        parentId: 0,
        level: 1,
        children: null,
      },
      {
        id: 5,
        path: "/user",
        icon: "user",
        name: "用户管理",
        sort: 1,
        parentId: 0,
        level: 1,
        children: null,
      },
      {
        id: 6,
        path: "/financial",
        icon: "reconciliation" ,
        name: "财务管理",
        sort: 1,
        parentId: 0,
        level: 1,
        children: null,
      },
      {
        id: 7,
        path: "/banner",
        icon: "picture",
        name: "c端banner",
        sort: 1,
        parentId: 0,
        level: 1,
        children: null,
      },
      
    ];

    ctx.helper.success({ ctx, res });
  }
}

module.exports = MenuController;
