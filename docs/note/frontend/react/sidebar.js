const root = '../../../';
const path = '/note/frontend/react/';
let section=[
	"1_react",
	"2_react",
	"3_react",
	"4_react",
	"5_react",
	"6_react",
	"7_react",
	"8_react",
	"9_react",
	"10_react",
	"11_react",
	"12_react",
	"13_react",
	"14_react",
	"15_react",
	"16_react",
	"17_react",
	"18_react",
	"19_react",
	"20_react",
	"21_react",
	"22_react",
	"23_react",
	"24_react"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);