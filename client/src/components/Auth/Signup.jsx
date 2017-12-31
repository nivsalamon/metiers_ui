import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        signedup: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.signUpSubmit = this.signUpSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state)
  }

  signUpSubmit(e) {
    e.preventDefault();
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


  render() {
    if(this.state.signedup){
      return <Redirect to="/login" />
    }

    return ( 
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <form>
              <label>First Name</label>
              <input placeholder="Name" name="firstName" className="form-control" onChange={this.handleChange}/>
              <label>Last Name</label>
              <input placeholder="Last Name" name="lastName" className="form-control" onChange={this.handleChange}/>
              <label>Email</label>
              <input placeholder="Email" name="email" className="form-control" onChange={this.handleChange}/>
              <label>Password</label>
              <input placeholder="Password" name="password" className="form-control" type="password" onChange={this.handleChange}/>
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
