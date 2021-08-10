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
                // console.log("prev is "+ prev)
                // console.log("next is "+ next)
                prev = prev == 'README.md' ? '0_README.md' : prev
                next = next == 'README.md' ? '0_README.md' : next
                let prev_nums = prev.split("_")
                let next_nums = next.split("_")
                let size = prev_nums.length >= next_nums.length ? next_nums.length : prev_nums.length
                if(size > 0){
                    // 例如：1_a.md,1_b.md,2_1_c.md,2_2_c.md
                    for(let i=0; i<size-1; i++){
                        let prev_num = parseInt(prev_nums[i]);
                        let next_num = parseInt(next_nums[i]);
                        if(prev_num > next_num){
                            // console.log("compare return 1")
                            return 1;
                        }
                        if(prev_num < next_num){
                            // console.log("compare return -1")
                            return -1;
                        }
                    }
                }
                let strCompare = prev_nums > next_nums ? 1 : -1;
                // console.log("compare return "+ strCompare)
                return strCompare
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

/*
function inferSidebars(){
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
                // console.log("prev is "+ prev)
                // console.log("next is "+ next)
                prev = prev == 'README.md' ? '0_README.md' : prev
                next = next == 'README.md' ? '0_README.md' : next
                let prev_nums = prev.split("_")
                let next_nums = next.split("_")
                let size = prev_nums.length >= next_nums.length ? next_nums.length : prev_nums.length
                if(size > 0){
                    // 例如：1_a.md,1_b.md,2_1_c.md,2_2_c.md
                    for(let i=0; i<size-1; i++){
                        let prev_num = parseInt(prev_nums[i]);
                        let next_num = parseInt(next_nums[i]);
                        if(prev_num > next_num){
                            // console.log("compare return 1")
                            return 1;
                        }
                        if(prev_num < next_num){
                            // console.log("compare return -1")
                            return -1;
                        }
                    }
                }
                let strCompare = prev_nums > next_nums ? 1 : -1;
                // console.log("compare return "+ strCompare)
                return strCompare
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

inferSidebars()*/
