const dashboardLoad = (results) => {
  return {
    type: 'DASHBOARD_LOAD',
    payload: results,
  };
};

export default dashboardLoad; 