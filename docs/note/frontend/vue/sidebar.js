const root = '../../../';
const path = '/note/frontend/vue/';
let section=[
	"10_vue"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);