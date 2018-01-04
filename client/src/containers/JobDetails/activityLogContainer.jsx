import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addActivityLog from '../../actions/activityLogAction';
import activityLog from '../../components/Homepage/Dashboard/JobDetails/ActivityLog/activityLog';

function mapStateToProps(state) {
  return {
    jobDetails: state.searchJobDetails,
    jobDetailsAdditional: state.jobDetailsAdditional,
  }
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addActivityLog: addActivityLog,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(activityLog);