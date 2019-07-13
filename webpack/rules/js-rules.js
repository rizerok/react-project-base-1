const { js: jsRegExp } = require('./regexp-exts');

const jsRulesClient = {
  test: jsRegExp,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};

const jsRulesServer = {
  test: jsRegExp,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react']
    }
  }
};

module.exports = {
  jsRulesClient,
  jsRulesServer
};
