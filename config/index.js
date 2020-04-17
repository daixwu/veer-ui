const path = require('path')

module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8081,
    autoOpenBrowser: true,
    // Paths
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {},

    cssSourceMap: false
  },

  build: {
    env: require('./prod.env'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../lib'),
    assetsSubDirectory: '',
    assetsPublicPath: './',
    productionSourceMap: false,

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
