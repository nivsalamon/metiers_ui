import React, { Component } from 'react';
import config from '../../../../../../config';
import axios from 'axios';


class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobId: this.props.jobDetailsAdditional.job_id,
      jobNotes: this.props.jobDetailsAdditional.job_notes,
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const context = this;

    axios.post(`http://${config.server}:${config.port}/editNotes`, {
      jobId: this.state.jobId,
      jobNotes: this.state.jobNotes
    }).then(() => {
      axios.post(`http://${config.server}:${config.port}/jobDetail`, {
        jobId: context.state.jobId
      }).then((res) => {
        context.props.jobDetailsAction(res.data[0]);
      })
    })
  }

  render() {
    return (
      <div id="job-notes-wrapper">
        <div className="row">
          <div className="offset-md-1 col-md-10 offset-md-1">
            <h4>Job Notes</h4>
            <textarea
              className="form-control"
              id="notesInput"
              rows="10"
              placeholder="Notes for this job"
              name="jobNotes"
              value={this.state.jobNotes}
              onChange={this.handleUserInput}
            />
            <button
              type="Submit"
              className="btn btn-job-form push-top-sm-xs"
              data-toggle="modal"
              data-target="#notesModal"
              onClick={this.handleSubmit}
            >
              Save
            </button>
            <div className="modal fade" id="notesModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">SUCCESS!</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                    <p>Successfully Updated Job Notes!</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Notes;
