function populateSidebar(path, section){
    for(let i=0; i < section.length; i++){
        section[i] = path + section[i];
        console.log(section[i])
    }
    section.unshift("");
    return section;
}

module.exports = populateSidebar;