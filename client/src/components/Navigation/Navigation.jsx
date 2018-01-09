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
            <li className="sidebar-brand brand-name">
              <Link to="/home" href="/home">Metiers</Link>
            </li>
            <li>
              <Link to="/home/search" href="/home/search"><i className="fa fa-search" aria-hidden="true"></i></Link>
            </li>
            <li>
              <Link to="/home/enter-job" href="/home/enter-job"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
