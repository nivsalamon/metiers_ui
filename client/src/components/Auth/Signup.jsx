import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <label>First Name</label>
            <input placeholder="Name" className="form-control"/>
            <label>Last Name</label>
            <input placeholder="Last Name" className="form-control"/>
            <label>Email</label>
            <input placeholder="Email" className="form-control"/>
            <label>Password</label>
            <input placeholder="Password" className="form-control" type="password"/>
            <button className="btn btn-primary push-top-sm-xs">Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
