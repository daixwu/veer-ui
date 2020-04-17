// https://github.com/shelljs/shelljs
require('shelljs/global')
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
}

const path = require('path')
const utils = require('./utils')
const ora = require('ora')
const webpack = require('webpack')
const webpackCommonConfig = require('./webpack.common')
const webpackComponentConfig = require('./webpack.component')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
console.log('assetsPath: ', assetsPath);
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
// cp('-R', 'static/*', assetsPath)

function buildPack(webpackConfig, cb, spinnerText) {
  const spinner = ora(spinnerText || 'building for uncompressed files...')
  spinner.start()
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    cb && cb()
  })
}

function fullBuild(cb) {
  // build index.js
  buildPack(webpackCommonConfig, function () {

    // build cube.min.js
    webpackCommonConfig.output.filename = utils.assetsPath('[name].min.js')
    webpackCommonConfig.output.chunkFilename = '[name].min.js'
    webpackCommonConfig.optimization = {minimizer: [new TerserJSPlugin()]}
    webpackCommonConfig.plugins.splice(1, 1,
      new webpack.DefinePlugin({
        'process.env': config.build.env
      }),
      new MiniCssExtractPlugin({filename: ('[name].min.css')}),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    )
    buildPack(webpackCommonConfig, function () {
      cb && cb()
    }, 'building for cube.min.js')
  }, 'building for index.js')
}

function modulesBuild() {
  // build ${module}/index.js
  buildPack(webpackComponentConfig, function () {

    // build ${module}/${module}.min.js
    webpackComponentConfig.output.filename = utils.assetsPath('[name]/[name].min.js')
    webpackComponentConfig.output.chunkFilename = '[name]/[name].min.js'
    webpackCommonConfig.optimization = {minimizer: [new TerserJSPlugin()]}
    webpackComponentConfig.plugins.splice(1, 1,
      new webpack.DefinePlugin({
        'process.env': config.build.env
      }),
      new MiniCssExtractPlugin({filename: ('[name]/[name].min.css')}),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    )
    buildPack(webpackComponentConfig, null, 'building for ${module}/${module}.min.js')
  }, 'building for ${module}/index.js')
}

fullBuild(modulesBuild)
