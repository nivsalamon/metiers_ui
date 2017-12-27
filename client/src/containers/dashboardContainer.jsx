import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import dashboard from '../components/Homepage/Dashboard/index';
import dashboardAction from '../actions/dashboardLoad';

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
  };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        dashboardAction: dashboardAction,
    }, dispatch);
  }

export default connect(mapStateToProps, matchDispatchToProps)(dashboard);
