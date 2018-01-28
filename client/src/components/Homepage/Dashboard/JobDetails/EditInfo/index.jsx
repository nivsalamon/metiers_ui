import React, { Component } from 'react';
import config from '../../../../../../../config';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import EditJob from './EditJob';
import EditCompany from './EditCompany';

class EditInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      job: {
        jobId: this.props.jobDetailsAdditional.job_id,
        title: this.props.jobDetailsAdditional.job_title_name,
        description: this.props.jobDetailsAdditional.job_description,
        source: this.props.jobDetailsAdditional.job_source,
        status: this.props.jobDetailsAdditional.status,
        ranking: this.props.jobDetailsAdditional.ranking,
        deadline: moment(this.props.jobDetailsAdditional.deadline.split('T')[0]),
        link: this.props.jobDetailsAdditional.url,
      },
      company: {
        companyId: this.props.jobDetailsAdditional.company_id,
        name: this.props.jobDetailsAdditional.company_name,
        description: this.props.jobDetailsAdditional.company_description,
        phone: this.props.jobDetailsAdditional.company_phone,
        address1: this.props.jobDetailsAdditional.company_address1,
        address2: this.props.jobDetailsAdditional.company_address2,
        city: this.props.jobDetailsAdditional.company_city,
        state: this.props.jobDetailsAdditional.company_state,
        zip: this.props.jobDetailsAdditional.company_zip,
      },
      editInfoRedirect: false,
    };

    this.jobInputChange = this.jobInputChange.bind(this);
    this.companyInputChange = this.companyInputChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillMount() {
    const oldJob = this.state['job'];
    const newJob = this.state['job'];
    newJob['deadline'] = moment();

    if (this.state.job.deadline === '' || this.state.job.deadline === null) {
      this.setState({
        oldJob: newJob,
      })
    }
  }

  jobInputChange(key, e) {
    const oldJob = this.state['job'];
    const newJob = this.state['job'];
    const value = e.target.value;
    newJob[key] = value;

    this.setState({
      oldJob: newJob,
    });
  }

  companyInputChange(key, e) {
    const oldCompany = this.state['company'];
    const newCompany = this.state['company'];
    const value = e.target.value;
    newCompany[key] = value;

    this.setState({
      oldCompany: newCompany,
    });
  }

  dateChange(date) {
    const job = {...this.state.job};
    job.deadline = date;
    this.setState({
      job,
    });
  }

  closeModal() {
    const context = this;

    axios.post(`http://${config.server}:${config.port}/jobDetail`, {
        jobId: this.state.job.jobId
    }).then((res) => {
      context.props.jobDetailsAction(res.data[0]);
      if (context.props.jobDetailsAdditional) {
        this.setState({editInfoRedirect: true});
      }

      axios.post(`http://${config.server}:${config.port}/dashboard`, {
        id: context.props.auth.user.id,
      }).then((res) => {
        console.log('this is res.data', res.data)
        if (res.data.length === 0) {
          context.props.dashboardAction([]);
        } else {
          context.props.dashboardAction(res.data);
        }
      })
    })
  }

  handleSubmit() {
    axios.post(`http://${config.server}:${config.port}/editJobInfo`, {
      job: this.state.job,
      company: this.state.company,
    }).then((res) => {
      console.log('Successfully post to DB', res);
    })
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.editInfoRedirect) {
      return <Redirect to="/home/job-detail" />
    }
    return (
      <div className="container">
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
                  <EditJob
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
                  <EditCompany
                    company={this.state.company}
                    companyInputChange={this.companyInputChange}
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#editModal"
              onClick={this.handleSubmit}
            >
              Save
            </button>
            <div className="modal fade" id="editModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">SUCCESS!</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                    <p>Successfully Updated Job Information!</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={this.closeModal} data-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>     
        </form>
      </div>
    );
  }
}

export default EditInfo;