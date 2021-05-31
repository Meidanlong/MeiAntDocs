const url = '/note/language/python/';
let section=[
	"1_py",
	"2_py",
	"3_py",
	"4_py",
	"5_py",
	"6_py",
	"7_py",
	"8_py",
	"9_py",
	"10_py",
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