const root = '../../../';
const path = '/note/backend/machinelearning/';
let section=[
	"1_ml",
	"2_ml",
	"3_ml",
	"4_ml",
	"5_ml",
	"6_ml",
	"7_ml",
	"8_ml",
	"9_ml",
	"10_ml",
	"11_ml"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);