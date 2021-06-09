const root = '../../../../';
const path = '/note/backend/spring/springcloudalibaba/';
let section=[
	"jwt",
	"wxlogin"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);