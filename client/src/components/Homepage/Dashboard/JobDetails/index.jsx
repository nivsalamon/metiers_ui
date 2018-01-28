import React, { Component } from 'react';
import config from '../../../../../../config';
import axios from 'axios';
import { NavLink, Link, Switch, Route, Redirect } from 'react-router-dom';
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

    if (this.state.redirect === false) {
      this.setState({
        toggle: true,
      });
      axios.post(`http://${config.server}:${config.port}/jobDetail`, {
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
      axios.post(`http://${config.server}:${config.port}/jobDetail`, {
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
            <div className="row">
              <div className="col-md-12 push-bottom-sm-xs push-top">
                <h1 className="job-title-header">{this.props.jobDetailsAdditional.company_name}</h1>
                <h2 className="job-title-header job-detail-job-header">{this.props.jobDetailsAdditional.job_title_name}</h2>
              </div>
            </div>
            <div className="row justify-content-md-center text-center nav-jd-wrapper">
            <ul className="nav nav-pills nav-stacked">
                <li className="job-tab-detail">
                  <NavLink exact to="/home/job-detail" href="/home/job-detail" activeClassName="job-details-selected">Info</NavLink>
                </li>
                <li className="job-tab-detail">
                  <NavLink to="/home/job-detail/notes" activeClassName="job-details-selected" href="/home/job-detail/notes">Notes</NavLink>
                </li>
                <li className="job-tab-detail">
                  <NavLink to="/home/job-detail/notifications" activeClassName="job-details-selected" href="/home/job-detail/notifications">Notifications</NavLink>
                </li>
                <li className="job-tab-detail">
                  <NavLink to="/home/job-detail/activity-log" activeClassName="job-details-selected" href="/home/job-detail/activity-log">Activity Log</NavLink>
                </li>
            </ul>
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
