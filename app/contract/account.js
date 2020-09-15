'use strict';

module.exports = {
  UserLoginRequest: {
    password: {
      type: 'string',
      required: true,
      description: '密码',
    },
    username: {
      type: 'string',
      required: true,
      description: '姓名',
    },
  },
};
