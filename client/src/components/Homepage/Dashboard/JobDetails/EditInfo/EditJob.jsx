import React from 'react';
import DatePicker from 'react-datepicker';

const EditJobInfo = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="edit-job-label">Title</label><span className="must-have">*</span>
            <input
              type="text"
              className="form-control"
              id="jobTitleInput"
              placeholder="Title"
              value={props.job['title']}
              onChange={props.jobInputChange.bind(this, 'title')}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="edit-job-label">Deadline</label>
            <DatePicker
              className="form-control"
              id="jobDeadlineSelect"
              selected={props.job['deadline']}
              onChange={props.dateChange}
              dateFormat="LL"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="edit-job-label">Current Status</label><span className="must-have">*</span>
            <select
              className="form-control"
              id="jobStatusSelect"
              value={props.job['status']}
              onChange={props.jobInputChange.bind(this, 'status')}
            >
              <option value="Will Apply">Will Apply</option>
              <option value="Applied">Applied</option>
              <option value="Follow Up">Follow Up</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="edit-job-label">Ranking: 5 being your dream job</label>
            <select
              className="form-control"
              id="jobRankingSelect"
              value={props.job['ranking']}
              onChange={props.jobInputChange.bind(this, 'ranking')}
            >
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group text-area">
        <label className="edit-job-label">Description</label>
        <textarea
          className="form-control"
          id="descriptionInput"
          rows="3"
          placeholder="Job description"
          value={props.job['description']}
          onChange={props.jobInputChange.bind(this, 'description')}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="edit-job-label">Source</label>
            <input
              type="text"
              className="form-control"
              id="jobSourceInput"
              placeholder="Where did you hear about this job?"
              value={props.job['source']}
              onChange={props.jobInputChange.bind(this, 'source')}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="edit-job-label">Job Application URL</label>
            <input
              type="text"
              className="form-control"
              id="jobLinkInput"
              placeholder="URL"
              value={props.job['link']}
              onChange={props.jobInputChange.bind(this, 'link')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJobInfo;
