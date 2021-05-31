const root = '../../../';
const path = '/note/backend/scrapy/';
let section=[
	"1_scrapy",
	"2_scrapy",
	"3_scrapy",
	"4_scrapy"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);