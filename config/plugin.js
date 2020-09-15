'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc-feat',
  },

  validate: {
    enable: true,
    package: 'egg-validate',
  },

  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },

  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },

  // 生成hash码
  bcrypt: {
    enable: true,
    package: 'egg-bcrypt',
  },

  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
