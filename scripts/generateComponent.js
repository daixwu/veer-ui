const fs = require('fs')

const { resolve, log, logInfo, successLog, errorLog, generateFile, dotExistDirectoryCreate, toUpperCase } = require('./utils')
const { vueTemplate, vueTsTemplate, entryTemplate, readmeTemplate } = require('./template')

const TARGET = process.env.npm_lifecycle_event

logInfo('请输入你要生成的组件名称')

let componentName = ''
process.stdin.on('data', async (chunk) => {
  const inputName = String(chunk).trim().toString()
  //  组件目录路径
  const componentDirectory = resolve('../packages/components', inputName)
  const entryFile = resolve(componentDirectory, 'index.js')
  const readmeFile = resolve(componentDirectory, 'doc.md')
  const vueFile = resolve(componentDirectory, `${inputName}.vue`)

  const hasComponentDirectory = fs.existsSync(componentDirectory)
  if (hasComponentDirectory) {
    errorLog(`${inputName}组件目录已存在，请重新输入`)
    return
  } else {
    log(`正在生成组件目录 ${componentDirectory}`)
    await dotExistDirectoryCreate(componentDirectory)
  }
  try {
    if (inputName.includes('-')) {
      const inputArr = inputName.split('-').map(toUpperCase)
      componentName = inputArr.join('')
    } else {
      componentName = toUpperCase(inputName)
    }

    log(`正在生成 vue 文件 ${vueFile}`)
    if (TARGET.indexOf('ts') !== -1) {
      await generateFile(vueFile, vueTsTemplate(inputName))
    } else {
      await generateFile(vueFile, vueTemplate(inputName))
    }

    log(`正在生成 entry 文件 ${entryFile}`)
    await generateFile(entryFile, entryTemplate(componentName, inputName))
    log(`正在生成 readmeFile 文件 ${readmeFile}`)
    await generateFile(readmeFile, readmeTemplate(componentName))
    successLog('生成成功')
  } catch (e) {
    errorLog(e.message)
  }

  process.stdin.emit('end')
})
process.stdin.on('end', () => {
  log('exit')
  process.exit()
})
