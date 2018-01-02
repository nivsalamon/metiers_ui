const searchJobDetails = (state = null, action) => {
  if (action.type === 'SHOW_JOB_DETAILS') {
    return action.payload;
  }
  return state;
};

export default searchJobDetails;