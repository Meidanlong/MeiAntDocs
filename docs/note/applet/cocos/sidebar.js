const path = '/note/applet/cocos/';
let section=[
	"",
	"getting-start"
];

populateSection = () => {
	for(let i=0; i < section.length; i++){
		section[i] = path + section[i];
		console.log(section[i])
	}
	return section;
}

module.exports = populateSection();