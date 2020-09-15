'use strict';

module.exports = (option, app) => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (error) {
      app.emit('error', error, this);
      const status = error.status || 500;
      const err =
        status === 500 && app.config.env === 'prod'
          ? 'Internal Server Error'
          : error.message;

      ctx.body = {
        code: status,
        error: err,
      };
      if (status === 422) {
        ctx.body.detail = error.errors;
      }
      ctx.status = 200;
    }
  };
};
