import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
    <div id="wrapper" className={this.state.active ? 'toggled' : 'notToggled'}>
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li>
            <Link to="/home" href="/home">Dashboard</Link>
          </li>
          <li>
            Search
          </li>
          <li>
            <Link to="/home/enter-job" href="/home/enter-job">Enter Job</Link>
          </li>
          <li>
            <Link to="/login" href="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup" href="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Navigation;
