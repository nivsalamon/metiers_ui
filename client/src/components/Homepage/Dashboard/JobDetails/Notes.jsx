import React, { Component } from 'react';
import axios from 'axios';

class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobNotes: '',
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
    console.log('I will update job notes');
  }

  render() {
    return (
      <div>
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
          className="btn btn-job-form"
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
    );
  }
};

export default Notes;
