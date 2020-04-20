const { resolve, log, logInfo, successLog, errorLog, generateFile } = require('./utils')
const { vueTemplate } = require('./templatePage')

logInfo('请输入你要生成的页面名称')

process.stdin.on('data', async (chunk) => {
  const inputName = String(chunk).trim().toString()
  const pageFile = resolve('../example/views', `${inputName}.vue`)

  try {
    log(`正在生成 style 文件 ${pageFile}`)
    await generateFile(pageFile, vueTemplate(inputName))
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
