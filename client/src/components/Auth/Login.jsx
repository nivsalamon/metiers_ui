import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

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
    axios.post('http://localhost:3003/login', {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
      console.log('res FE', res);
      if(res.status === 200){
        console.log(res.data.token);
        this.setState({loginSuccess: true});
      } 
    }).catch(err => {
      if(err.response.status === 401) {
        this.setState({errors: true});
      }
    })
  }

  render() {
    if(this.state.loginSuccess){
      return <Redirect to="/home" />
    }

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <label className="push-top-sm-xs">Login</label>
            <input placeholder="Email" className="form-control" name="email" onChange={this.handleChange.bind(this)}/>
            <label className="push-top-sm-xs">Password</label>
            <input placeholder="Password" className="form-control" type="password" name="password" onChange={this.handleChange.bind(this)}/>
             { this.state.errors && <div className="alert alert-danger push-top-sm">Invalid Credentials.</div> }
            <button className="btn btn-primary push-top-sm-xs" onClick={this.loginSubmit}>Login</button>
            <Link to="/signup" href="/signup" className="btn btn-info push-top-sm-xs push-left-sm">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
