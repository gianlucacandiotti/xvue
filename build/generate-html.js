require('dotenv').config()
var path = require('path')
var fs = require('fs-extra')
var replace = require("replace")
var wget = require('wget')
var routes = require('../config/routes')

var baseUrl = process.env.HOST + ':' + process.env.EXPRESS_PORT
var htmlFolderPath = path.resolve(__dirname, '../html')

fs.emptyDirSync(path.resolve(htmlFolderPath))
fs.ensureFileSync(path.resolve(htmlFolderPath, './index.html'))

routes.forEach(function (route) {
  var sRoute = route === '/' ? '' : route;
  fs.ensureDirSync(path.resolve(htmlFolderPath, '.' + sRoute))

  var download = wget.download(baseUrl + sRoute, 'html' + sRoute + '/index.html')

  download.on('error', function (err) {
      console.log(err)
  })

  download.on('end', function (output) {
      console.log(output)

      var depth = output.split('/').length - 2
      var backFolder = '../'

      for (; depth > 0; depth--) {
        backFolder += '../'
      }

      setTimeout(function(){
        replace({
          regex: '(\/static.+?(.js|.css))',
          replacement: backFolder + 'public$1',
          paths: [output],
          silent: true
        })
      }, 1000)
  })
})


