var replace = require("replace")
var path = require('path')
var fs = require('fs-extra')

replace({
  regex: '\<script(.)*%DEV_PATH%(.)*\<\/script\>',
  replacement: '',
  paths: ['dist/index.html'],
  silent: true
})

var publicPath = path.resolve(__dirname, '../public/static')
var distPath = path.resolve(__dirname, '../dist/static')
var viewsPath = path.resolve(__dirname, '../views')

fs.emptydirSync(publicPath)

fs.copySync(distPath, publicPath);

fs.copySync(path.resolve(distPath, '../index.html'), path.resolve(viewsPath, 'layouts/base.dust'));
