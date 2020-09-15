'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiRouter = router.namespace('/user');
  apiRouter.post('/', controller.user.create);
};
