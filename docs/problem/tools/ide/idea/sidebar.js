const url = '/problem/tools/ide/idea/';
let section=[
	"1_idea",
	"2_idea",
	"3_idea"
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