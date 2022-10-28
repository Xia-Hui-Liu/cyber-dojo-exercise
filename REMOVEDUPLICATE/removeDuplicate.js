const removeDuplicate = (nlist) => {
    if (nlist.length > 0 && nlist.length !== [...new Set(nlist)].length) {
        return [...new Set(nlist)];
    }
    return nlist;
    };
    
module.exports = removeDuplicate;