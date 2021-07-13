const path = require('path')
const fs = require('fs')
const sidebarMap = require('./sidebarMap.js')


exports.inferSidebars = () => {
    const sidebar = {}
    sidebarMap.forEach(({ title,dirPath }) => {
        // __dirname 当前目录
        // path.resolve 将目录修改替换
        const dirpath = path.resolve(__dirname, '../../' + dirPath)
        console.log(dirpath)
        const parent = `/${dirPath}/`
        const children = fs.readdirSync(dirpath)
            .filter(
                item => item.endsWith('.md') && fs.statSync(path.join(dirpath, item)).isFile()
            )
            .sort(function (prev,next) {
                if(next.includes('README.md')) return 1
                let prev_nums = prev.split("_")
                let next_nums = next.split("_")
                let size = prev_nums.length >= next_nums.length ? next_nums.length : prev_nums.length
                if(size > 0){
                    // 例如：1_wx.md,1_1_wx.md,1_1_2_wx.md,4_wx.md
                    for(let i=0; i<size; i++){
                        if(parseInt(prev_nums[i]) > parseInt(next_nums[i])){
                            return 1;
                        }
                    }
                }
                return -1
            })
            .map(item => (item.includes('README') ? '' : item))
        sidebar[parent] = [
            {
                parent,
                children,
                collapsable: true
            }
        ]
    })
    return sidebar
}