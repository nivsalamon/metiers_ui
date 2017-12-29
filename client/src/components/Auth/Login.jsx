import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <label>Login</label>
            <input placeholder="Login" className="form-control"/>
            <label>Password</label>
            <input placeholder="Password" className="form-control" type="password"/>
            <button className="btn btn-primary push-top-sm-xs">Login</button>
            <Link to="/signup" href="/signup" className="btn btn-info push-top-sm-xs push-left-sm">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
