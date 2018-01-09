import React, { Component } from 'react';

const InitialInfo = (props) => {
  return (
    <div className="container">
      <h4 className="card-header">Job Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers bold-header">Job Title</h6>
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
          <h6 className="job-details-headers bold-header">Status</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.status}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers bold-header">Ranking</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.ranking}</div>
        </div>
      </div>
      <h6 className="job-details-headers bold-header">Description</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.job_description}</div>
      <h6 className="job-details-headers bold-header">Source</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.job_source}</div>
      <h6 className="job-details-headers bold-header">Job Application URL</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.url}</div>
      <h4 className="card-header push-top-sm bold-header">Company Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers bold-header">Company Name</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_name}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers bold-header">Company Phone</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_phone}</div>
        </div>
      </div>
      <h6 className="job-details-headers bold-header">Address 1</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.company_address1}</div>
      <h6 className="job-details-headers bold-header">Address 2</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.company_address2}</div>
      <div className="row">
        <div className="col-md-4">
          <h6 className="job-details-headers bold-header">City</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_city}</div>
        </div>
        <div className="col-md-4">
          <h6 className="job-details-headers bold-header">State</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_state}</div>
        </div>
        <div className="col-md-4">
          <h6 className="job-details-headers bold-header">ZIP</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_zip}</div>
        </div>
      </div>
      <h6 className="job-details-headers bold-header">Company Description</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.company_description}</div>
    </div>
  );
};

export default InitialInfo;
