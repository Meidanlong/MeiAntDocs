const root = '../../../../';
const path = '/note/backend/spring/springcloud/';
let section=[
	"1_springcloud",
	"2_springcloud",
	"3_springcloud",
	"4_springcloud",
	"5_springcloud"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);