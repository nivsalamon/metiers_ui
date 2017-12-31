import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Ripple from '../../Jobs/Search/Ripple.svg';
import ActivityLog from './ActivityLog';
import Info from './Info';
import Notes from './Notes';
import EditInfo from './EditInfo';
import Notifications from './Notification';

class JobDetail extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      redirect: false,
    };
  }

  componentWillMount() {
    const context = this;

    if (this.state.redirecrt === false) {
      this.setState({
        toggle: true,
      });
      axios.post(`${auth.serverUrl}/jobDetail`, {
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
      axios.post(`${auth.serverUrl}/jobDetail`, {
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
                  <h4>{this.props.jobDetails.company_name} - {this.props.jobDetails.job_title_name}</h4>
                  <h5>{this.props.jobDetails.status}</h5>
                  <h5>Rating: {this.props.jobDetails.rating}</h5>
                  {/* <h6>Deadline: {this.props.jobDetails.deadline.split('T')[0]}</h6> */}
                  <a href={'http://' + this.props.jobDetails.url} target="_blank">Job Application Link</a>
                </div>
              </div>
            </div>
            <div className="row push-bottom-sm push-top-sm justify-content-md-center text-center">
              <div className="col-md-4">
                <div className="job-tab-detail">
                  <Link to="/job-detail" href="/job-detail">Info</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="job-tab-detail">
                  <Link to="/job-detail/notes" href="/job-detail/notes">Notes</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="job-tab-detail">
                  <Link to="/job-detail/activity-log" href="/job-detail/activity-log">Activity Log</Link>
                </div>
              </div>
            </div>
            <div className="job-detail-sections">
              <Switch>
                <Route path="/job-detail/notes" render={() => <Notes />} />
                <Route path="/job-detail/notifications" render={() => <Notifications />} />
                <Route path="/job-detail/activity-log" render={() => <ActivityLog jobId={this.props.jobDetailsAdditional.jobId}/>} />
                <Route path="/job-detail/edit-info" render={() => <EditInfo />} />
                <Route path="/job-detail" render={() => <Info />} />
              </Switch>
            </div>
          </div>) :
          <div className="center">
            <Ripple />
            {this.state.redirect === true ? (<Redirect to="/job-detail/" />) : null}
          </div>
        }
      </div>
    );
  }
}

export default JobDetail;
