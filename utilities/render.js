var path = require('path');

var render = function render(res, view) {
  res.sendFile(path.join(__dirname + '/../views/' + view + '.html'));
}

module.exports = render;
