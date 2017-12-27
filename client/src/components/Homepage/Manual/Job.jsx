import React from 'react';
import DatePicker from 'react-datepicker';

const job = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              id="jobTitleInput"
              placeholder="Title"
              name="title"
              value={props.job.title}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Deadline</label>
            <DatePicker
              className="form-control"
              id="jobDeadlineSelect"
              selected={props.job.deadline}
              onChange={props.handleChange}
              dateFormat="LL"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Current Status</label>
            <select
              className="form-control"
              id="jobStatusSelect"
              name="status"
              onChange={props.handleUserInput}
            >
              <option value="Will Apply">Will Apply</option>
              <option value="Applied">Applied</option>
              <option value="Follow Up">Follow Up</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Ranking: 5 being your dream job</label>
            <select
              className="form-control"
              id="jobRankingSelect"
              name="ranking"
              onChange={props.handleUserInput}
            >
              <option value="5">☆☆☆☆☆</option>
              <option value="4">☆☆☆☆</option>
              <option value="3">☆☆☆</option>
              <option value="2">☆☆</option>
              <option value="1">☆</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group text-area">
        <label>Description</label>
        <textarea
          className="form-control"
          id="descriptionInput"
          rows="3"
          placeholder="Job description"
          name="description"
          value={props.job.description}
          onChange={props.handleUserInput}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Source</label>
            <input
              type="text"
              className="form-control"
              id="jobSourceInput"
              placeholder="Where did you hear about this job?"
              name="source"
              value={props.job.source}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Job Application URL</label>
            <input
              type="text"
              className="form-control"
              id="jobLinkInput"
              placeholder="URL"
              name="link"
              value={props.job.link}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
      </div>
      <div className="form-group text-area">
        <label>Notes</label>
        <textarea
          className="form-control"
          id="notesInput"
          rows="3"
          placeholder="Notes for this job"
          name="notes"
          value={props.job.notes}
          onChange={props.handleUserInput}
        />
      </div>
    </div>
  );
};

export default job;
