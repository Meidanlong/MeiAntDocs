// sidebar参考文档 https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84
module.exports = {
  // sprica
  "/sprica/": require("../../sprica/sidebar"),

  // call
  "/call/": require("../../call/sidebar"),

  // blog
  "/blog/language/java/jvm/": require("../../blog/language/java/jvm/sidebar"),

  // note-wx
  "/note/applet/wechat/": require("../../note/applet/wechat/sidebar"),
  "/note/applet/wxgame/": require("../../note/applet/wxgame/sidebar"),
  "/note/applet/cocos/": require("../../note/applet/cocos/sidebar"),
  // note-backend
  "/note/backend/machinelearning/": require("../../note/backend/machinelearning/sidebar"),
  "/note/backend/scrapy/": require("../../note/backend/scrapy/sidebar"),
  // note-backend-spring
  "/note/backend/spring/shendujiexi/": require("../../note/backend/spring/shendujiexi/sidebar"),
  "/note/backend/spring/springboot2/": require("../../note/backend/spring/springboot2/sidebar"),
  "/note/backend/spring/springcloud/": require("../../note/backend/spring/springcloud/sidebar"),
  "/note/backend/spring/webflux/": require("../../note/backend/spring/webflux/sidebar"),
  "/note/backend/spring/springcloudalibaba/": require("../../note/backend/spring/springcloudalibaba/sidebar"),
  // note-frontend
  "/note/frontend/nextjs/": require("../../note/frontend/nextjs/sidebar"),
  "/note/frontend/react/": require("../../note/frontend/react/sidebar"),
  "/note/frontend/uniapp/": require("../../note/frontend/uniapp/sidebar"),
  "/note/frontend/vue/": require("../../note/frontend/vue/sidebar"),
  // note-language
  "/note/language/javascript/": require("../../note/language/javascript/sidebar"),
  "/note/language/python/": require("../../note/language/python/sidebar"),

  // problem
  "/problem/app/": require("../../problem/app/sidebar"),
  // problem-backend
  "/problem/backend/docker/": require("../../problem/backend/docker/sidebar"),
  "/problem/backend/gradle/": require("../../problem/backend/gradle/sidebar"),
  "/problem/backend/mvn/": require("../../problem/backend/mvn/sidebar"),
  "/problem/backend/mysql/": require("../../problem/backend/mysql/sidebar"),
  "/problem/backend/scrapy/": require("../../problem/backend/scrapy/sidebar"),
  "/problem/backend/spring/": require("../../problem/backend/spring/sidebar"),
  "/problem/backend/tomcat/": require("../../problem/backend/tomcat/sidebar"),
  // problem-frontend
  "/problem/frontend/css/": require("../../problem/frontend/css/sidebar"),
  "/problem/frontend/react/": require("../../problem/frontend/react/sidebar"),
  "/problem/frontend/vue/": require("../../problem/frontend/vue/sidebar"),
  // problem-language
  "/problem/language/java/": require("../../problem/language/java/sidebar"),
  "/problem/language/python/": require("../../problem/language/python/sidebar"),
  // problem-systems
  "/problem/systems/linux/": require("../../problem/systems/linux/sidebar"),
  "/problem/systems/windows/": require("../../problem/systems/windows/sidebar"),
  // problem-tools
  "/problem/tools/chrome/": require("../../problem/tools/chrome/sidebar"),
  "/problem/tools/crt/": require("../../problem/tools/crt/sidebar"),
  "/problem/tools/git/": require("../../problem/tools/git/sidebar"),
  // problem-tools-ide
  "/problem/tools/ide/idea/": require("../../problem/tools/ide/idea/sidebar"),
  "/problem/tools/ide/sublime/": require("../../problem/tools/ide/sublime/sidebar"),
  "/problem/tools/ide/vscode/": require("../../problem/tools/ide/vscode/sidebar"),
  "/problem/tools/ide/wxtool/": require("../../problem/tools/ide/wxtool/sidebar"),

};