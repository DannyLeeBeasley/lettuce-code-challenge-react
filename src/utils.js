export const removeDuplicates = (data) => {
    let searchTermHitMap = new Map();
    data.forEach((searchObj) => {
      searchTermHitMap.set(searchObj.query, searchObj.hits);
    });
    let noDuplicateArr = [];
    searchTermHitMap.forEach((hits, query) => {
      noDuplicateArr.push({ query, hits });
    });
    return noDuplicateArr;
  }