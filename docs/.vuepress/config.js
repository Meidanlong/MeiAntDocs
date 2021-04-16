module.exports = {
  theme:"antdocs",
  title: "Meiracle",
  description: "This is not a blog",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/me.jpg" }]
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
};