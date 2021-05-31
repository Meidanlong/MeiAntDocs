const root = '../../../';
const path = '/note/frontend/nextjs/';
let section=[
	"1_next",
	"2_next",
	"3_next",
	"4_next",
	"5_next",
	"6_next",
	"10_next"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);