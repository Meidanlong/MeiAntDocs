const path = '/note/backend/machineleaning/';
let section=[
	"1_ml",
	"2_ml",
	"3_ml",
	"4_ml",
	"5_ml",
	"6_ml",
	"7_ml",
	"8_ml",
	"9_ml",
	"10_ml",
	"11_ml"
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