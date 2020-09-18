'use strict';

const Controller = require('egg').Controller;


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
    const res = {
        "menu": [
            {
                "id": 5,
                "name": "首页",
                "url": "/home",
                "icon": "DashboardOutlined",
                "desc": "首页",
                "sort": 1,
                "parentId": 0,
                "level": 1,
                "children": null
            },
            {
                "id": 1,
                "name": "权限管理",
                "url": "/auth",
                "icon": "MenuUnfoldOutlined",
                "desc": "权限管理",
                "sort": 10,
                "parentId": 0,
                "level": 1,
                "children": [
                    {
                        "id": 2,
                        "name": "菜单管理",
                        "url": "/auth/menu",
                        "icon": "ArrowDown",
                        "desc": "菜单管理",
                        "sort": 1,
                        "parentId": 1,
                        "level": 2
                    },
                    {
                        "id": 3,
                        "name": "用户管理",
                        "url": "/auth/user",
                        "icon": "UserOutlined",
                        "desc": "用户管理",
                        "sort": 2,
                        "parentId": 1,
                        "level": 2
                    },
                    {
                        "id": 4,
                        "name": "角色管理",
                        "url": "/auth/role",
                        "icon": "TeamOutlined",
                        "desc": "角色管理",
                        "sort": 3,
                        "parentId": 1,
                        "level": 2
                    }
                ]
            }
        ]
    }

    ctx.helper.success({ ctx, res });
  }
}

module.exports = MenuController;
