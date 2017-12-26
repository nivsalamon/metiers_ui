import React from 'react';
import axios from 'axios';
import Navigation from '../../Navigation/Navigation';

class Home extends React.Component {
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
      <div>
        <div id="wrapper" className={this.state.active ? 'toggled' : 'notToggled'}>
          <Navigation />
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <div className="row no-gutters">
                <div className="col-md-3">
                  <button
                    className="btn btn-secondary"
                    id="menu-toggle"
                    onClick={this.toggleClass}
                  >
                  Toggle Menu
                  </button>
                </div>
                <div className="offset-md-2 col-md-7">
                  <h3>Your Name</h3>
                </div>
              </div>
            </div>
            <div className="row push-bottom">
              <div className="col-md-4">
                <div className="job-tab">
                  <h1>Will Apply</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="job-tab">
                  <h1>Applied</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="job-tab">
                  <h1>Follow-Up</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
