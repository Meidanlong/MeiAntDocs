const path = require('path')
const fs = require('fs')
const navUtil = require('./navUtil.js')

exports.inferSidebars = () => {
    const sidebar = {}
    navUtil.getSidebarMap().forEach((title, dirPath) => {
        // console.log(dirPath)
        dirPath = dirPath.substr(1,dirPath.length-2)
        // __dirname 当前目录
        // path.resolve 将目录修改替换
        const dp = path.resolve(__dirname, '../../' + dirPath)
        // console.log(dp)
        const parent = `/${dirPath}/`
        const children = fs.readdirSync(dp)
            .filter(
                item => item.endsWith('.md') && fs.statSync(path.join(dp, item)).isFile()
            )
            .sort(function (prev,next) {
                if(next.includes('README.md')) return 1
                let prev_nums = prev.split("_")
                let next_nums = next.split("_")
                let size = prev_nums.length >= next_nums.length ? next_nums.length : prev_nums.length
                if(size > 0){
                    // 例如：1_wx.md,2_wx.md,3_wx.md,4_wx.md
                    for(let i=0; i<size; i++){
                        let prev_num = parseInt(prev_nums[i]);
                        let next_num = parseInt(next_nums[i]);
                        if(prev_num > next_num){
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
        // console.log(parent)
        // console.log(children)
    })
    return sidebar
}