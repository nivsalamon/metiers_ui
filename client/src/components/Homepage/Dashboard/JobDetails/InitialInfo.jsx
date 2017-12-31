import React, { Component } from 'react';

const InitialInfo = (props) => {
  return (
    <div className="container">
      <h4 className="card-header">Job Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Job Title</h6>
          <div className="job-details-headers">Title</div>
        </div>
        <div className="col-md-6">
          {/* <h6 className="job-details-headers">Deadline</h6> */}
          {/* <div>Deadline</div> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Status</h6>
          <div className="job-details-headers">Job Status</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Ranking</h6>
          <div className="job-details-headers">Job Ranking</div>
        </div>
      </div>
      <h6 className="job-details-headers">Description</h6>
      <div className="job-details-headers">Job Description</div>
      <h6 className="job-details-headers">Source</h6>
      <div className="job-details-headers">Job Source</div>
      <h6 className="job-details-headers">Job Application URL</h6>
      <div className="job-details-headers">Job Link</div>
      <h4 className="card-header push-top-sm">Company Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Company Name</h6>
          <div className="job-details-headers">Company Name</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Company Phone</h6>
          <div className="job-details-headers">Company Phone</div>
        </div>
      </div>
      <h6 className="job-details-headers">Address 1</h6>
      <div className="job-details-headers">Company Address1</div>
      <h6 className="job-details-headers">Address 2</h6>
      <div className="job-details-headers">Company Address2</div>
      <div className="row">
        <div className="col-md-4">
          <h6 className="job-details-headers">City</h6>
          <div className="job-details-headers">Company City</div>
        </div>
        <div className="col-md-4">
          <h6 className="job-details-headers">State</h6>
          <div className="job-details-headers">Company State</div>
        </div>
        <div className="col-md-4">
          <h6 className="job-details-headers">ZIP</h6>
          <div className="job-details-headers">Company Zip</div>
        </div>
      </div>
      <h6 className="job-details-headers">Company Description</h6>
      <div className="job-details-headers">Company Description</div>
    </div>
  );
};

export default InitialInfo;
