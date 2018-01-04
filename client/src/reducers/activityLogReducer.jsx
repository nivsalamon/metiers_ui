const activityLogReducer = (state=[], action) => {
  if (action.type === "ACTIVITY_LOG") {
    return action.payload;
  }
  return state;
};

export default activityLogReducer;