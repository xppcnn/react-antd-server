'use strict';

module.exports = {
  createUserRequest: {
    mobile: {
      type: 'string',
      required: true,
      description: '⼿手机号',
      example: '18801731528',
      format: /^1[34578]\d{9}$/,
    },
    password: {
      type: 'string',
      required: true,
      description: '密码',
      example: '111111',
    },
    username: {
      type: 'string',
      required: true,
      description: '姓名',
      example: 'Tom',
    },
  },
};
