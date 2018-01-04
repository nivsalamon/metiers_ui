const searchJobs = (results) => {
  if (results === 'REFRESH') {
    return {
      type: "REFRESH_SEARCH",
      payload: []
    }
  } else if (results.length === 0) {
    return {
      type: 'SEARCH',
      payload: results,
    }; 
  } else if (results.listings) {
    return {
      type: 'SEARCH',
      payload: results.listings.listing
    }
  } else {
    return {
      type: 'SEARCH',
      payload: results
    }
  }
};
export default searchJobs;