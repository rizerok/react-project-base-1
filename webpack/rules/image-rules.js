const paths = require('../../paths');
const { images: imagesRegExp } = require('./regexp-exts');

const imageRulesClient = {
  test: imagesRegExp,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: `${paths.dirNames.assets}/[name].[hash:8].[ext]`
      }
    }
  ]
};

const imageRulesServer = {
  test: imagesRegExp,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: `${paths.dirNames.assets}/[name].[hash:8].[ext]`,
        emitFile: false
      }
    }
  ]
};

module.exports = {
  imageRulesClient,
  imageRulesServer
};
