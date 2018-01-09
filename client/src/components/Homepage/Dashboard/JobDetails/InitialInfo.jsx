import React, { Component } from 'react';

const InitialInfo = (props) => {
  return (
    <div className="container">
      <h4 className="card-header">Job Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Job Title</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.job_title_name}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Deadline</h6>
          {
            props.jobDetailsAdditional.deadline === '' || props.jobDetailsAdditional.deadline === null ?
            <div className="job-details-headers">TBD</div> :
            <div className="job-details-headers">{props.jobDetailsAdditional.deadline.split('T')[0]}</div>
          }
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Status</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.status}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Ranking</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.ranking}</div>
        </div>
      </div>
      <h6 className="job-details-headers">Description</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.job_description}</div>
      <h6 className="job-details-headers">Source</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.job_source}</div>
      <h6 className="job-details-headers">Job Application URL</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.url}</div>
      <h4 className="card-header push-top-sm">Company Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Company Name</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_name}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Company Phone</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_phone}</div>
        </div>
      </div>
      <h6 className="job-details-headers">Address 1</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.company_address1}</div>
      <h6 className="job-details-headers">Address 2</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.company_address2}</div>
      <div className="row">
        <div className="col-md-4">
          <h6 className="job-details-headers">City</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_city}</div>
        </div>
        <div className="col-md-4">
          <h6 className="job-details-headers">State</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_state}</div>
        </div>
        <div className="col-md-4">
          <h6 className="job-details-headers">ZIP</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_zip}</div>
        </div>
      </div>
      <h6 className="job-details-headers">Company Description</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.company_description}</div>
    </div>
  );
};

export default InitialInfo;
