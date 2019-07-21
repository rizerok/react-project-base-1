const { resolve } = require('path');

module.exports = {
  root: resolve(),
  project: resolve(), // changing in demo
  src: resolve('src'),
  styles: resolve('src', 'assets', 'styles'),
  img: resolve('src', 'assets', 'images'),
  components: resolve('src', 'components'),
  store: resolve('src', 'store'),
  middleware: resolve('src', 'middleware'),
  constants: resolve('src', 'constants'),
  utils: resolve('src', 'utils'),
  api: resolve('src', 'api')
};
