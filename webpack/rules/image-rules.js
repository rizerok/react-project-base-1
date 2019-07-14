const { images: imagesRegExp } = require('./regexp-exts');

const imageRules = {
  test: imagesRegExp,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'assets/[name].[hash:8].[ext]'
      }
    }
  ]
};

module.exports = {
  imageRules
};
