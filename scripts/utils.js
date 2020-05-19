const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const logSymbols = require('log-symbols')

const mkDirs = (directory, callback) => {
  const exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkDirs(path.dirname(directory), function() {
      fs.mkdirSync(directory)
      callback()
    })
  }
}

const errorLog = (error) => console.log(logSymbols.error, chalk.red(`${error}`))

module.exports = {
  resolve: (...file) => path.resolve(__dirname, ...file),
  log: (message) => console.log(chalk.green(`${message}`)),
  logInfo: (message) => console.log(logSymbols.info, chalk.green(`${message}`)),
  successLog: (message) => console.log(logSymbols.success, chalk.blue(`${message}`)),
  errorLog: (error) => console.log(logSymbols.error, chalk.red(`${error}`)),
  generateFile: (path, data) => {
    if (fs.existsSync(path)) {
      errorLog(`${path}文件已存在`)
      return
    }
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data, 'utf8', err => {
        if (err) {
          errorLog(err.message)
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
  },
  dotExistDirectoryCreate: (directory) => {
    return new Promise((resolve) => {
      mkDirs(directory, function() {
        resolve(true)
      })
    })
  },

  // 组件名首字母大写
  toUpperCase: (item) => {
    item = item.toString().toLocaleLowerCase()
    return item.substr(0, 1).toUpperCase() + item.substr(1)
  }
}
