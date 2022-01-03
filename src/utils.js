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

  export const countSearchTerms = (data) => {
    let searchTermCountMap = new Map();
    data.forEach((searchObj) => {
      if (searchTermCountMap.has(searchObj.query)) {
        let searchTermCount = searchTermCountMap.get(searchObj.query);
        let updatedSearchTermObj = {
          ...searchTermCount, count: searchTermCount.count+1, 
        }
        searchTermCountMap.set(searchObj.query, updatedSearchTermObj);
      } else {
        searchTermCountMap.set(searchObj.query, {count: 1, hits: searchObj.hits});
      }
    })
    return searchTermCountMap;
  }