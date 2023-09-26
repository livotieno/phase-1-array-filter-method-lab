function  findMatching(driversName, array){
    const name = driversName.char(0).toUppercase + driversName.slice(2).toLowerCase();
    const name2 = driversName.toLowerCase();
    const filter = array.filter(name);
    return filter;
}

function fuzzymatch(driversName ,array){
    const filterArray = array.filter(value => value.slice(0,3) === driversName)
    return filter;
}
function matchname(driversName, array){
    const filterArray = array.filter(Name === driversName);
    return filterArray;
}
