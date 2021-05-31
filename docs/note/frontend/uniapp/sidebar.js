const root = '../../../';
const path = '/note/frontend/uniapp/';
let section=[
	"10_uniapp",
	"11_uniapp",
	"12_uniapp",
	"100_uniapp",
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);