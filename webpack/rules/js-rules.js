const { js: jsRegExp } = require('./regexp-exts');

const plugins = [
  [
    'babel-plugin-named-asset-import',
    {
      loaderMap: {
        svg: {
          ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
        }
      }
    }
  ]
];

const jsRulesClient = {
  test: jsRegExp,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins
    }
  }
};

const jsRulesServer = {
  test: jsRegExp,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react'],
      plugins
    }
  }
};

module.exports = {
  jsRulesClient,
  jsRulesServer
};
