// https://github.com/shelljs/shelljs
require('shelljs/global')

var path = require('path')

var source = path.resolve(__dirname, '../src/index.html')
var destination = path.resolve(__dirname, '../views/layouts/base.dust')

cp(source, destination)
