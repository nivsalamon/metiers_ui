import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Job from './Job';
import Company from './Company';
import './manual.css';
import 'react-datepicker/dist/react-datepicker.css';

class Manual extends Component {
  constructor() {
    super();
    this.state = {
      job: {
        title: '',
        description: '',
        notes: '',
        source: '',
        status: 'Will Apply',
        ranking: '5',
        deadline: moment(),
        link: '',
      },
      company: {
        name: '',
        description: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
      },
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.linkChecker = this.linkChecker.bind(this); 
    this.removeModal = this.removeModal.bind(this);
    this.jobFormSubmit = this.jobFormSubmit.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });

    console.log(this.state);
  }

  handleChange(date) {
    this.setState({
      jobDeadline: date,
    });
  }

  linkChecker(str) {
    if (str.includes('https://')) {
      return str.slice(8);
    }
  
    if (str.includes('http://')) {
      return str.slice(7);
    }
  }

  removeModal() {
    document.getElementbyClassName('modal-backdrop fade show').remove();
  }

  jobFormSubmit(e) {
    console.log('I will submit form later')
  }

  render() {
    return (
      <div>
        <div className="container push-top">
          <form>
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div
                  role="tab"
                  id="headingOne"
                  className="mb-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h3 className="card-header">Job</h3>
                </div>
                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                  <div className="card-block">
                    <Job
                      job={this.state.job}
                      handleUserInput={this.handleUserInput}
                      handleChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  role="tab"
                  id="headingTwo"
                  className="mb-0 collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h3 className="card-header">Company</h3>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="card-block">
                    <Company
                      company={this.state.company}
                      handleUserInput={this.handleUserInput}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Upload File</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleInputFile"
                aria-describedby="fileHelp"
              />
              <small
                id="fileHelp"
                className="form-text text-muted"
              >Upload the resume and cover letter you used or plan to use for this job.
              </small>
            </div>
            <button
              type="Submit"
              className="btn btn-job-form"
              data-toggle="modal"
              data-target="#myModal"
            >Submit
            </button>
            <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">SUCCESS!</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                    <p>Successfully Added Job Lead!</p>
                  </div>
                  <div className="modal-footer">
                    <Link to="/enter-a-job" href="/enter-a-job" className="btn btn-secondary" onClick={this.removeModal}>
                      Add Another Job Lead
                    </Link>
                    <Link to="/home" href="/home" className="btn btn-job-form" onClick={this.removeModal}>
                      Go to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Manual;
