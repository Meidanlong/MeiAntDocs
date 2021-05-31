const root = '../../../../';
const path = '/note/backend/spring/webflux/';
let section=[
	"1_webflux",
	"2_webflux",
	"3_webflux"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);