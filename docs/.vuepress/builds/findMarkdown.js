const fs = require('fs')

function findMarkdown(dir, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) throw err

    files.forEach(fileName => {
      let innerDir = `${dir}/${fileName}`

      // console.log(`innerDir is ${innerDir}`)

      if (fileName.indexOf('.') !== 0) {
        fs.stat(innerDir, function(err, stat) {
          if (stat.isDirectory()) {
            findMarkdown(innerDir, callback)
          } else {
            callback(innerDir)
          }
        })
      }

      // 百度资源收录
      /*if(innerDir.split('.md').length > 1){
        let url = innerDir
            .replace('./docs', 'https://www.meidanlong.com')
            .replace('.md', '.html')
        console.log(url)
      }*/

    })
  })
}

module.exports = findMarkdown
