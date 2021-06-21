const root = '../../../../';
const path = '/note/backend/spring/springcloudalibaba-weifuwucongrumendaojinjie/';
let section=[
	"renzhengshouquan",
	"jwt",
	"xiaochengxudenglu",
	"AOPshouquan",
	"Feignchuanditoken",
	"AOPdenglujiancha"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);