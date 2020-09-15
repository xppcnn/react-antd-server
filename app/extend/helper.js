'use strict';

const moment = require('moment');

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');

// 封装响应体
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 1,
    data: res,
    msg,
  };
  ctx.status = 200;
};


// 封装响应体
exports.failure = ({ ctx, res = null, msg = '请求失败' }) => {
  ctx.body = {
    code: 0,
    data: res,
    msg,
  };
  ctx.status = 200;
};
