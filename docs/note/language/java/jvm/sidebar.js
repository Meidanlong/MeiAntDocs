const url = '/note/language/java/jvm/';
let section=[
	"1_jvm",
	"2_jvm"
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
}

let populateSidebar = require(path());
module.exports = populateSidebar(url, section);