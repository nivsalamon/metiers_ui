import React from 'react';
import axios from 'axios';
import Navigation from '../../Navigation/Navigation';
import { Switch, Route, Link } from 'react-router-dom';
import WillApply from '../../../containers/willApplyContainer';
import Applied from '../../../containers/appliedContainer';
import FollowUp from '../../../containers/followUpContainer';
import dashboardContainer from '../../../containers/dashboardContainer';

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
            <div className="container push-bottom">
            <div className="row">
              <div className="col-md-4">
                <div className="job-tab">
                  <Link to="/home/will-apply" href="/home/will-apply">Will Apply</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="job-tab">
                  <Link to="/home/applied" href="/home/applied">Applied</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="job-tab">
                  <Link to="/home/follow-up" href="/home/follow-up">Follow-Up</Link>
                </div>
              </div>
              </div>
            </div>
            <Switch>
              <Route path="/home/will-apply" render={() => <WillApply />} />
              <Route path="/home/applied" render={() => <Applied />} />
              <Route path="/home/follow-up" render={() => <FollowUp />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
