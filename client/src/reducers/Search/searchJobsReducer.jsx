const searchJobs = (state = [], action) => {
  if (action.type === 'SEARCH') {
    return action.payload;
  }
  if (action.type === 'REFRESH_SEARCH') {
    return action.payload;
  }
  return state;
};

export default searchJobs;