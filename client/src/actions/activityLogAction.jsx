const activityLog = (data) => {
  data.reverse();
  return {
    type: "ACTIVITY_LOG",
    payload: data
  }
};

export default activityLog;