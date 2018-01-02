const showJobDetails = (job) => {
  return {
    type: "SHOW_JOB_DETAILS",
    payload: job,
  };
};

export default showJobDetails;