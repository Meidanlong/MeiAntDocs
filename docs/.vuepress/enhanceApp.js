
export default ({ 
    Vue, // VuePress 正在使用的 Vue 构造函数
    router // 当前应用的路由实例
}) => {

    /**
     * 路由切换事件处理
     */
    router.beforeEach((to, from, next) => {
        console.log("切换路由", to.fullPath, from.fullPath);

        //触发百度的pv统计
        if (typeof _hmt != "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
                console.log("上报百度统计", to.fullPath);
            }
        }

        // continue
        next();
    });
};