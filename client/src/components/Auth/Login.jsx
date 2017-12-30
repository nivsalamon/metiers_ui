import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    //console.log(this.state)
  }





  loginSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3003/login', {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
      console.log('res FE', res);
      if(res.status === 200){
        // this.setState({signedup: true});
        console.log('nice worked!!!')
      } 
    }).catch(err => {
      if(err.response.status === 401) {
        alert('Please login again. Email or Password is incorrect.');
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <label>Login</label>
            <input placeholder="Email" className="form-control" name="email" onChange={this.handleChange.bind(this)}/>
            <label>Password</label>
            <input placeholder="Password" className="form-control" type="password" name="password" onChange={this.handleChange.bind(this)}/>
            <button className="btn btn-primary push-top-sm-xs" onClick={this.loginSubmit}>Login</button>
            <Link to="/signup" href="/signup" className="btn btn-info push-top-sm-xs push-left-sm">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
