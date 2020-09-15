/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1599735058866_2337';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '接口文档',
      description: '接口 swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: [ 'http', 'https' ],
    consumes: [ 'application/json' ],
    produces: [ 'application/json' ],
    enableSecurity: false,
    // enableValidate: true,
    routerMap: true,
    enable: true,
  };

  config.mongoose = {
    url: 'mongodb+srv://xwl:xwl123456@cluster0-oxklg.mongodb.net/xwl?retryWrites=true&w=majority',
    options: {
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
