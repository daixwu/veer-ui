const fs = require('fs')
const path = require('path')

function getEntries () {
  const dir = path.resolve(__dirname, '../packages/components')
  const packages = fs.readdirSync(dir)

  const entries = {}
  packages.forEach(function (pkg) {
    const dirPath = path.join(dir, pkg)
    const stat = fs.statSync(dirPath)
    if (stat && stat.isDirectory()) {
      entries[pkg] = path.join(dirPath, 'index.js')
    }
  })
  return entries
}

exports.getEntries = getEntries
