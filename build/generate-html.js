var app = require('../app')

var route, routes = []
var reg = /\/\^\/(.*)\/\?\(\?\=\/\|\$\)\/i/;

app._router.stack.forEach(function (middleware) {
    if (middleware.route) { // routes registered directly on the app
        routes.push(middleware.route);
    } else if(middleware.name === 'router') { // router middleware
      console.log(Object.keys(middleware.regexp));
      var basePath = '';
      console.log(typeof middleware.regexp);
      if (typeof middleware.regexp === 'object')
        basePath += '/';
      else {
        var match = middleware.regexp.match(reg);
        basePath += match[1] + '/';
      }

      middleware.handle.stack.forEach(function (handler){
          route = handler.route;
          route && routes.push((basePath + route).replace(/\/$/, ''));
      });
    }
});

console.log(routes)
