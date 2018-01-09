import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import InitialInfo from '../../../../containers/JobDetails/jobInfoPropsContainer';

class Info extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="edit-info-link-wrapper">
        <Link to="/home/job-detail/edit-info" href="/home/job-detail/edit-info" className="btn btn-primary">
          Edit Info
        </Link>
        <InitialInfo />
      </div>
    );
  }
};

export default Info;
