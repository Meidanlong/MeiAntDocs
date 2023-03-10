const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir, delComponents)

function delComponents(dir) {
  fs.readFile(dir, 'utf-8', (err, content) => {
    if (err) throw err

    fs.writeFile(dir, content.replace('<ad/>', ''), err => {
      if (err) throw err
    })

    fs.writeFile(dir, content.replace('<comment/>', ''), err => {
      if (err) throw err
    })

    // fs.writeFile(dir, content.replace('nt/>', ''), err => {
    //   if (err) throw err
    // })
    // console.log(content)

  })
}
