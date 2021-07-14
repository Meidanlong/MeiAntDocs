const nav = require('./nav.js')

exports.getSidebarMap = () => {
    let sidebarMap = new Map();
    nav.forEach(({ text,link,items }) => {
        let t = text
        let l = link
        if(items != undefined && items.length > 0){
            items.forEach(({ text,link,items }) => {
                if(items != undefined && items.length > 0){
                    items.forEach(({ text,link,items }) => {
                        t = text
                        l = link
                        sidebarMap.set(l, t)
                    })
                }else{
                    t = text
                    l = link
                    sidebarMap.set(l, t)
                }
            })
        }else{
            sidebarMap.set(l, t)
        }
    })
    // console.log(sidebarMap)
    return sidebarMap
}