const nodeExternals = require('webpack-node-externals');
const { resolve } = require('path');
// config parts
const alias = require('./alias');
const {
  jsRulesServer,
  styleRulesModulesServer,
  imageRules
} = require('./rules');

module.exports = {
  name: 'server',
  target: 'node',
  mode: process.env.NODE_ENV === 'development'
    ? 'development'
    : 'production',
  entry: {
    server: resolve('src', 'server.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('server')
  },
  resolve: {
    alias
  },
  module: {
    rules: [
      jsRulesServer,
      styleRulesModulesServer,
      imageRules
    ]
  },
  externals: [nodeExternals()]
};
