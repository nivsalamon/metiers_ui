import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import InitialInfo from './InitialInfo';

class Info extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Link to="/job-detail/edit-info" href="/job-detail/edit-info" className="btn btn-primary">
          Edit
        </Link>
        <InitialInfo />
      </div>
    );
  }
};

export default Info;
