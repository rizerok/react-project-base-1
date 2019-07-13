const { resolve } = require('path');

module.exports = {
  src: resolve('src'),
  styles: resolve('src', 'assets', 'styles'),
  img: resolve('src', 'assets', 'images'),
  components: resolve('src', 'components'),
  modules: resolve('src', 'modules'),
  middleware: resolve('src', 'middleware')
};
