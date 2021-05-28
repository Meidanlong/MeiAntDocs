module.exports = {
  theme:"antdocs",
  title: "Mei",
  description: "你能达到什么程度，取决于内心有多渴望",
  port: 3000,
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/me.jpg" }],
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
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    // repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
  algolia: {
    applicationID:'9PW9QDHYJ2',
    apiKey: 'b1612e42b87025f9813a09e2a82a9aec'
  }
};