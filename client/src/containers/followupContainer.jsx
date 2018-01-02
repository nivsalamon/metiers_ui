import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import followUp from '../components/Homepage/Dashboard/Status/FollowUp';
import showJobDetails from '../actions/jobDetails';

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    showJobDetails: showJobDetails,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(followUp);
