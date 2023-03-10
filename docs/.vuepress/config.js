const sidebar = require('./config/sidebarUtil')

module.exports = {
  theme:"antdocs",
  title: "Meiracle",
  description: "你能达到什么程度，取决于内心有多渴望",
  port: 3000,
  base: "/",
  head: [
    ['meta', {name: 'baidu-site-verification', content: 'code-usB0NBCiZQ'}],
    ["link", { rel: "icon",href: "/assets/me.jpg" }],
  	// 添加百度统计代码
  	["script", {},
  	  `
  	    var _hmt = _hmt || [];
  	    (function() {
  	      var hm = document.createElement("script");
  	      hm.src = "https://hm.baidu.com/hm.js?301fa1f6c47fde68d9b4bd5a9e660435";
  	      var s = document.getElementsByTagName("script")[0]; 
  	      s.parentNode.insertBefore(hm, s);
  	    })();
  	  `
  	]
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/assets/me.jpg',
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: sidebar.inferSidebars(),
    sidebarDepth: 4,
    lastUpdated: "Last Updated",
    // repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: true,
    algolia: {
      applicationID:'9PW9QDHYJ2',
      apiKey: 'b1612e42b87025f9813a09e2a82a9aec'
    },
    /*ads:{
      style: 2,
      speed: 5000,
      items:[
        {
          text: '高性能低价小鸟云，使用我的推荐码：ZR2GGE，购买云服务器和云主机可在官网活动上再打85折，非常给力！！！新同学点击图片直达~',
          image:'https://upload.niaoyun.com/resource/cps_ad/1/300X100_l.jpg',
          link: 'https://www.niaoyun.com/?u=JPHJ68'
        },
        {
          text: '高性能低价小鸟云，使用我的推荐码：ZR2GGE，购买云服务器和云主机可在官网活动上再打85折，非常给力！！！新同学点击图片直达~',
          image:'https://upload.niaoyun.com/resource/cps_ad/2/300X100_l.jpg',
          link: 'https://www.niaoyun.com/?u=JPHJ68'
        },
      ]
    },*/
    backToTop: true,
  }
};