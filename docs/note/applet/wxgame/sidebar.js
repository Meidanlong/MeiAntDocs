const root = '../../../';
const path = '/note/applet/wxgame/';
let section=[
	"1_wxgame"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);