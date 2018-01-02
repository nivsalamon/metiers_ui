const jobDetailsAdditional = (state=null, action) => {
  if (action.type === 'JOB_DETAILS_ADDITIONAL') {
      return action.payload;
  }
  return state;
};

export default jobDetailsAdditional;