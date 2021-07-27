const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir, writeComponents)

function writeComponents(dir) {
  // 禁止在引导页面添加评论
  var namearray = dir.split('README')
  if (namearray.length === 1) {
    // 开头添加推广组件
    // fs.writeFile(dir,`<ad/>`,err => {if (err) throw err})
    // 结尾追加广告组件
    fs.appendFile(dir, `<ad/>`, err => {if (err) throw err})
    // 结尾追加评论组件
    fs.appendFile(dir, `<comment/>`, err => {if (err) throw err})
    // console.log(`add components to ${dir}`)
  }
}
