const { images: imagesRegExp } = require('./regexp-exts');
const { img: imgPath } = require('../alias');

const imageRules = {
  test: imagesRegExp,
  include: imgPath,
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
