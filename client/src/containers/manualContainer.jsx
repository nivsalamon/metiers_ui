import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Manual from '../components/Homepage/Manual';
import dashboardAction from '../actions/dashboardLoad';

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    dashboardAction: dashboardAction,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
    auth: state.auth
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Manual);
