const path = '/note/backend/scrapy/';
let section=[
	"1_scrapy",
	"2_scrapy",
	"3_scrapy",
	"4_scrapy"
];

populateSidebar = (path, section) => {
	for(let i=0; i < section.length; i++){
		section[i] = path + section[i];
		console.log(section[i])
	}
	section.unshift("");
	return section;
}

module.exports = populateSidebar(path, section);