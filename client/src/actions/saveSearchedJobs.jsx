const saveOrDeleteSearchedJobs = (job, savedJobs) => {
  if (job.checked === 'Refresh') {
    return {
      type: "REFRESH_JOBS",
      payload: savedJobs
    }
  } else if (job.checked === false) {
    savedJobs.map((savedJob, i) => {
      if (job.title === savedJob.title) {
        const index = savedJobs.indexOf(savedJob);
        savedJobs.splice(index, 1);
        return {
          type: "ALREADY_SAVED_OR_DELETE",
          payload: savedJobs
        }
      }
    }) 
    return {
      type: "ALREADY_SAVED_OR_DELETE",
      payload: savedJobs
    }
  } else if (savedJobs.includes(job) && job.checked === true) {
    return {
      type: "ALREADY_SAVED_OR_DELETE",
      payload: savedJobs
    };
  } else {
    return {
      type: "SAVE_SEARCHED_JOB",
      payload: [job, savedJobs]
    }
  }
};
export default saveOrDeleteSearchedJobs;