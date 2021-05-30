const path = '/note/backend/spring/shendujiexi';
let section=[
	"1_spring",
	"2_spring",
	"11_spring"
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