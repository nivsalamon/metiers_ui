import React from 'react';
import axios from 'axios';
import Navigation from '../../Navigation/Navigation';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import WillApply from '../../../containers/willApplyContainer';
import Applied from '../../../containers/appliedContainer';
import FollowUp from '../../../containers/followUpContainer';
import dashboardContainer from '../../../containers/dashboardContainer';
import Manual from '../Manual';
import './dashboard.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }

  componentWillMount() {
    // auth.refresh();
    var context = this;
    axios.get(`http://localhost:3003/dashboard`)
      .then((res) => {
        console.log('this is res.data', res.data)
        if (res.data.length === 0) {
          context.props.dashboardAction([]);
        } else {
          context.props.dashboardAction(res.data);
        }
      })
      .catch(err => console.log(err));
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
                    id="menu-toggle"
                    className="btn btn-secondary"
                    onClick={this.toggleClass}
                  >
                  <i id="toggler" className={this.state.active ? 'fa fa-chevron-left' : 'fa fa-chevron-right'} aria-hidden="true"></i>
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
                  <NavLink to="/home/will-apply" activeClassName="selected" href="/home/will-apply">Will Apply</NavLink>
                </div>
              </div>
              <div className="col-md-4">
                <div className="job-tab">
                  <NavLink to="/home/applied" activeClassName="selected" href="/home/applied">Applied</NavLink>
                </div>
              </div>
              <div className="col-md-4">
                <div className="job-tab">
                  <NavLink to="/home/follow-up" activeClassName="selected" href="/home/follow-up">Follow-Up</NavLink>
                </div>
              </div>
              </div>
            </div>
            <Switch>
              <Route path="/home/will-apply" render={() => <WillApply />} />
              <Route path="/home/applied" render={() => <Applied />} />
              <Route path="/home/follow-up" render={() => <FollowUp />} />
              <Route path="/home/enter-job" render={() => <Manual />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
