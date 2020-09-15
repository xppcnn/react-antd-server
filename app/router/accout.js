'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiRouter = router.namespace('/account');
  apiRouter.post('/login', controller.account.login);
  apiRouter.post('/logout', controller.account.logout);
};
