'use strict';

module.exports = {
  UserLoginRequest: {
    password: {
      type: 'string',
      required: true,
      description: '密码',
      select: false
    },
    username: {
      type: 'string',
      required: true,
      description: '姓名',
    },
  },
};
