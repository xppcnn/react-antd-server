'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  console.log('app',app);
  
  const apiRouter = router.namespace('/user');
  apiRouter.post('/', controller.user.create);
  apiRouter.get('/menu', jwt, controller.menu.getMenu);
  apiRouter.get('/userInfo',jwt, controller.user.getUserInfo);
};
