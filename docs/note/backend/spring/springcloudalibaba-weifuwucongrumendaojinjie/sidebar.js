const root = '../../../../';
const path = '/note/backend/spring/springcloudalibaba-weifuwucongrumendaojinjie/';
let section=[
	"jwt",
	"wxlogin",
	"AOP授权",
	"Feign传递token",
	"AOP登陆检查"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);