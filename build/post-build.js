var replace = require("replace")

replace({
  regex: "<script type=text/javascript src=%DEV_PATH%/app.js></script>",
  replacement: "",
  paths: ['views/layouts/base.dust'],
  silent: true
})
