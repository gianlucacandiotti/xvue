var fs = require('fs-extra');
var routesFolder = './routes';

var loadRoutes = function (app) {
  var files = fs.readdirSync(routesFolder);

  files.filter(file => file !== 'index.js').forEach((file) => {
    var router = require('./' + file);
    app.use(router.basePath, router.router);
  });
}

module.exports = loadRoutes;
