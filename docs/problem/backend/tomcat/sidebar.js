const url = '/problem/backend/tomcat/';
let section=[
	"1_tomcat",
	"2_tomcat",
	"3_tomcat",
];

/**
 * 获取populateSidebar路径
 * @returns {string}
 */
const path = () => {
	const popSbPath = '.vuepress/config/populateSidebar'
	let folders = url.split("/");
	let folderNum = folders.length;
	if(folderNum === 6){
		return '../../../../' + popSbPath;
	}
	if(folderNum === 5){
		return '../../../' + popSbPath;
	}
	if(folderNum === 4){
		return '../../' + popSbPath;
	}
}

let populateSidebar = require(path());
module.exports = populateSidebar(url, section);