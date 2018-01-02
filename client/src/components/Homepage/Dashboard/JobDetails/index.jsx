import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Ripple from '../../Search/Ripple.svg';
import ActivityLog from '../../../../containers/JobDetails/activityLogContainer';
import Info from './Info';
import Notes from '../../../../containers/JobDetails/editNotesPropsContainer';
import EditInfo from '../../../../containers/JobDetails/editInfoPropsContainer';
import Notification from './Notification/notification';

class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      redirect: false,
    };
  }

  componentWillMount() {
    const context = this;
<<<<<<< HEAD
    if (this.state.redirecrt === false) {
=======

    if (this.state.redirect === false) {
>>>>>>> [add]
      this.setState({
        toggle: true,
      });
      axios.post('http://localhost:3003/jobDetail', {
        jobId: context.props.jobDetails.id
      }).then((res) => {
        context.props.jobDetailsAction(res.data[0]);
        if (context.props.jobDetailsAdditional) {
          context.setState({
            toggle: false,
            redirect: true,
          });
        } else {
          context.setState({
            toggle: true,
            redirect: false,
          });
        }
      });
    } else {
      this.setState({
        toggle: true,
      });
      axios.post('http://localhost:3003/jobDetail', {
        jobId: context.props.jobDetails.id
      }).then((res) => {
        context.props.jobDetailsAction(res.data[0]);
        if (context.props.jobDetailsAdditional) {
          context.setState({
            toggle: false,
            redirect: true,
          });
        } else {
          context.setState({
            toggle: true,
            redirect: false,
          });
        }
      });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div> 
        {this.state.toggle === false ?
          (<div className="container push-top-sm">
            <div className="row justify-content-md-center text-center">
              <div className="col-md-4">
                <div className="left-align">
                  <h4>{this.props.jobDetailsAdditional.company_name} - {this.props.jobDetailsAdditional.job_title_name}</h4>
                  <h5>{this.props.jobDetailsAdditional.status}</h5>
                  <h5>Ranking: {this.props.jobDetailsAdditional.ranking}</h5>
                  {/* <h6>Deadline: {this.props.jobDetails.deadline.split('T')[0]}</h6> */}
                  <a href={'http://' + this.props.jobDetailsAdditional.url} target="_blank">Job Application Link</a>
                </div>
              </div>
            </div>
            <div className="row push-bottom-sm push-top-sm justify-content-md-center text-center">
              <div className="col-md-3">
                <div className="job-tab-detail">
                  <Link to="/home/job-detail" href="/home/job-detail">Info</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="job-tab-detail">
                  <Link to="/home/job-detail/notes" href="/home/job-detail/notes">Notes</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="job-tab-detail">
                  <Link to="/home/job-detail/notifications" href="/home/job-detail/notifications">Notifications</Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="job-tab-detail">
                  <Link to="/home/job-detail/activity-log" href="/home/job-detail/activity-log">Activity Log</Link>
                </div>
              </div>
            </div>
            <div className="job-detail-sections">
              <Switch>
                <Route path="/home/job-detail/notes" render={() => <Notes />} />
                <Route path="/home/job-detail/notifications" render={() => <Notification jobId={this.props.jobDetails.id}/>} />
                <Route path="/home/job-detail/activity-log" render={() => <ActivityLog />} />
                {/* <Route path="/home/job-detail/activity-log" render={() => <ActivityLog jobId={this.props.jobDetailsAdditional.jobId}/>} /> */}
                <Route path="/home/job-detail/edit-info" render={() => <EditInfo />} />
                <Route path="/home/job-detail" render={() => <Info />} />
              </Switch>
            </div>
          </div>) :
          <div className="center">
            <Ripple />
            {this.state.redirect === true ? (<Redirect to="/home/job-detail/" />) : null}
          </div>
        }
      </div>
    );
  }
}

export default JobDetail;
