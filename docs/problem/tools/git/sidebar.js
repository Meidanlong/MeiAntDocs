const url = '/problem/tools/git/';
let section=[
	"1_git",
	"2_git",
	"3_git",
	"4_git",
	"5_git",
	"6_git",
	"7_git",
	"8_git"
];

/**
 * 获取populateSidebar路径
 * @returns {string}
 */
const path = () => {
	const popSbPath = '.vuepress/config/populateSidebar'
	let folders = url.split("/");
	let folderNum = folders.length;
	let root = '';
	for(let i=0; i<folderNum-2; i++){
		root = root + "../"
	}
	return root + popSbPath;
}

let populateSidebar = require(path());
module.exports = populateSidebar(url, section);