import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Job from './Job';
import Company from './Company';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
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
      dashboardRedirect: false
    };

    this.jobInputChange = this.jobInputChange.bind(this);
    this.companyInputChange = this.companyInputChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.linkChecker = this.linkChecker.bind(this); 
    this.removeModal = this.removeModal.bind(this);
    this.jobFormSubmit = this.jobFormSubmit.bind(this);
  }

  jobInputChange(key, e) {
    const oldJob = this.state['job'];
    const newJob = this.state['job'];
    const value = e.target.value;
    newJob[key] = value;

    this.setState({
      oldJob: newJob,
    });

    console.log(this.state.job);
  }

  companyInputChange(key, e) {
    const oldCompany = this.state['company'];
    const newCompany = this.state['company'];
    const value = e.target.value;
    newCompany[key] = value;

    this.setState({
      oldCompany: newCompany,
    });

    console.log(this.state.company);
  }

  dateChange(date) {
    const job = {...this.state.job};
    job.deadline = date;
    this.setState({
      job,
    });
  }

  linkChecker(str) {
    const oldJob = this.state['job'];
    const newJob = this.state['job'];
    let value = str;

    if (str.includes('https://')) {
      value = str.slice(8);
      newJob['link'] = value;

      this.setState({
        oldJob: newJob,
      });
    }
  
    if (str.includes('http://')) {
      value = str.slice(7);
      newJob['link'] = value;

      this.setState({
        oldJob: newJob,
      });
    }
  }

  removeModal() {
    this.setState({dashboardRedirect: true});
  }

  jobFormSubmit(e) {
    this.linkChecker(this.state.job.link);

    axios.post('http://localhost:3003/manual', {
      id: this.props.auth.user.id,
      job: this.state.job,
      company: this.state.company,
    }).then((res) => {
      console.log('Successfully post to DB', res);
    })
  }

  render() {
<<<<<<< HEAD
    console.log('this.props= ', this.props.history)
    if(this.state.dashboardRedirect){
=======
    if (this.state.dashboardRedirect) {
>>>>>>> [add]
      return <Redirect to="/home" />
    }
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
                      jobInputChange={this.jobInputChange}
                      dateChange={this.dateChange}
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
                      companyInputChange={this.companyInputChange}
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
              type="button"
              className="btn btn-job-form"
              data-toggle="modal"
              data-target="#submitModal"
              onClick={this.jobFormSubmit}
            >Submit
            </button>
            <div className="modal fade" id="submitModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">SUCCESS!</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">&times;</button>
                  </div>
                  <div className="modal-body">
                    <p>Successfully Added Job Lead!</p>
                  </div>
                  <div className="modal-footer">
                    <Link to="/home/enter-job" href="/home/enter-job" className="btn btn-secondary" data-dismiss="modal">
                      Add Another Job Lead
                    </Link>
                    <button type="button" className="btn btn-job-form" onClick={this.removeModal} data-dismiss="modal">
                      Go to Dashboard
                    </button>
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

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Manual);
