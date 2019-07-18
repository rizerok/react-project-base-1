const { resolve } = require('path');

module.exports = {
  entry: {
    bundle: ['./demo/src/client.js']
  },
  resolve: {
    alias: {
      root: resolve('demo')
    }
  }
};
