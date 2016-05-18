var argv = require('minimist')(process.argv.slice(2))
var loadConfig = require('./load-config')
var pkg = require('./pkg')

module.exports = function () {
  var config = loadConfig(process.cwd(), argv.config)
  return {
    argv: argv,
    config: config,
    entry: argv._[0] || config.settings.entry || pkg.main,
    outfile: argv._[1] || config.settings.outfile || 'assets/index.js',
    pkg: pkg
  }
}