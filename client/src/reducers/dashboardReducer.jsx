const dashboardLoad = (state = [], action) => {
  if (action.type === 'DASHBOARD_LOAD') {
      return action.payload;
  }
  return state;
};

export default dashboardLoad;