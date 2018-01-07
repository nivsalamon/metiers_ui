import React from 'react';
import axios from 'axios';
import Navigation from '../../Navigation/Navigation';
import { Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import WillApply from '../../../containers/willApplyContainer';
import Applied from '../../../containers/appliedContainer';
import FollowUp from '../../../containers/followUpContainer';
import dashboardContainer from '../../../containers/dashboardContainer';
import Cards from '../../../containers/cardsContainer';
import Manual from '../../../containers/manualContainer';
import Info from '../../../containers/JobDetails/jobDetailsPropsContainer';
import Search from '../../../containers/Search/searchContainer';
import { logout } from '../../../actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './dashboard.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      logout: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.capitalize = this.capitalize.bind(this);
  } 

  componentWillMount() {
    // auth.refresh();
    var context = this;
    axios.post(`http://localhost:3003/dashboard`, {
      id: this.props.auth.user.id,
    }).then((res) => {
      console.log('this is res.data', res.data)
      if (res.data.length === 0) {
        context.props.dashboardAction([]);
      } else {
        context.props.dashboardAction(res.data);
      }
    })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    // auth.refresh();
    // var context = this;
    // axios.post(`http://localhost:3003/dashboard`, {
    //   id: this.props.auth.user.id, 
    // }).then((res) => {
    //     console.log('this is res.datasdasdasda', res.data)
    //     if (res.data.length === 0) {
    //       context.props.dashboardAction([]);
    //     } else {
    //       context.props.dashboardAction(res.data);
    //     }
    //   })
    //   .catch(err => console.log(err));
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  logoutHandler(e){
    e.preventDefault();
    this.props.logout();
    localStorage.clear();
    this.props.dashboardAction([]);
    this.setState({logout: true});
  }

  capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {

    if(this.state.logout){
      return <Redirect to="/login" />
    }

    return (      
      <div>
        <div id="wrapper" className={this.state.active ? 'toggled' : 'notToggled'}>
          <Navigation />
          <div id="page-content-wrapper">
            <div className="container-fluid header-top-nav">
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
                <div className="offset-md-2 col-md-6">
                  <h3>{this.capitalize(this.props.auth.user.firstName)} {this.capitalize(this.props.auth.user.lastName)}</h3>
                </div>
                <div className="col-md-1">
                  <a href="#" onClick={this.logoutHandler.bind(this)}>Logout</a>
                </div>
              </div>
            </div>
            <div className="container push-bottom status-headers-wrapper">
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
              <Route path="/home/job-detail" render={() => <Info />} />
              <Route path="/home/search" render={() => <Search />} />
              <Route path="/home" render={(props) => <Cards />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps, { logout })(Home);
