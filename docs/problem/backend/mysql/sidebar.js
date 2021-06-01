const url = '/problem/backend/mysql/';
let section=[
	"1_mysql",
	"2_mysql",
	"3_mysql",
	"4_mysql",
	"5_mysql"
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