const { join, resolve } = require('path');

const dirNames = {
  public: 'public',
  server: 'server',
  temp: 'temp',
  static: 'static',
  assets: 'assets'
};

// relative root project
const rootProject = {
  public: dirNames.public,
  server: dirNames.server,
  temp: dirNames.temp,
  static: join(dirNames.public, dirNames.static),
  assets: join(dirNames.public, dirNames.static, dirNames.assets)
};

// relative server
const server = {
  public: join('/'),
  static: join('/', dirNames.static, '/'),
  assets: join('/', dirNames.static, dirNames.assets, '/')
};

const absolute = {
  static: resolve(dirNames.public, dirNames.static),
  server: resolve(dirNames.server),
  temp: resolve(dirNames.temp)
};

module.exports = {
  dirNames,
  rootProject,
  server,
  absolute
};
