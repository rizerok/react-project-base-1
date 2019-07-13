const jsRules = require('./js-rules');
const styleRules = require('./style-rules');
const imageRules = require('./image-rules');

module.exports = {
  ...jsRules,
  ...styleRules,
  ...imageRules
};
