import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import './Auth.css';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        signedup: false,
        errors: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.signUpSubmit = this.signUpSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  signUpSubmit(e) {
    e.preventDefault();
    if( this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '' ){
      this.setState({errors:true});
    } else {
      axios.post('http://localhost:3003/signup', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }).then((res) => {
        if(res.status === 200){
          this.setState({signedup: true});
        }
      })
    }
  }


  render() {
    if(this.state.signedup){
      return <Redirect to="/login" />
    }

    return ( 
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
          <h2 className="auth-header">Sign Up</h2>
            <form className="auth-form">
              <label className="push-top-sm-xs">First Name</label>
              <input placeholder="First Name" name="firstName" className="form-control" onChange={this.handleChange}/>
              <label>Last Name</label>
              <input placeholder="Last Name" name="lastName" className="form-control" onChange={this.handleChange}/>
              <label>Email</label>
              <input placeholder="Email" name="email" className="form-control" onChange={this.handleChange}/>
              <label>Password</label>
              <input placeholder="Password" name="password" className="form-control" type="password" onChange={this.handleChange}/>
              { this.state.errors && <div className="alert alert-danger push-top-sm">Please fill out all the fields.</div> }
              <button className="btn btn-primary push-top-sm-xs" onClick={this.signUpSubmit}>Sign Up</button>
              <Link to="/login" href="/login" className="btn btn-info push-top-sm-xs push-left-sm">Login</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
