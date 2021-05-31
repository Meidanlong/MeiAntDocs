const root = '../../../../';
const path = '/note/backend/spring/springboot2/';
let section=[
	"90_springboot",
	"91_springboot",
	"92_springboot",
	"93_springboot",
	"94_springboot",
	"95_springboot",
	"96_springboot"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);