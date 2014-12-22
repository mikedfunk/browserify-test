var $ = require('jquery');
module.exports = function (selector, replacementText) {
  return $(selector).text(replacementText);
};
