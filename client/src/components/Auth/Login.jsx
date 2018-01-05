import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: false,
      loginSuccess: false
    }
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  loginSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then((res) => {
      console.log('res in comp')
      console.log(res);
      if(res.status === 200){
        console.log(res.data.token);
        this.setState({loginSuccess: true});
      } else if(res.response.status === 401) {
        this.setState({errors: true});
      }
    });
  }

  render() {
    if(this.state.loginSuccess){
      return <Redirect to="/home" />
    }

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <form onSubmit={this.loginSubmit}>
              <label className="push-top-sm-xs">Login</label>
              <input placeholder="Email" className="form-control" name="email" onChange={this.handleChange.bind(this)}/>
              <label className="push-top-sm-xs">Password</label>
              <input placeholder="Password" className="form-control" type="password" name="password" onChange={this.handleChange.bind(this)}/>
              { this.state.errors && <div className="alert alert-danger push-top-sm">Invalid Credentials.</div> }
              <button type="Submit" className="btn btn-primary push-top-sm-xs">Login</button>
              <Link to="/signup" href="/signup" className="btn btn-info push-top-sm-xs push-left-sm">Sign Up</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
