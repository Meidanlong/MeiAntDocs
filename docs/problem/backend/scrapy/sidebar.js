const url = '/problem/backend/scrapy/';
let section=[
	"1_scrapy"
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