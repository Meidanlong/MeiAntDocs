const root = '../../../';
const path = '/note/applet/wechat/';
let section=[
	"1_wx",
	"2_wx",
	"3_wx",
	"4_wx",
	"5_wx",
	"6_wx"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);