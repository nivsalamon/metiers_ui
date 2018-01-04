import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import activityLog from '../../components/Homepage/Dashboard/JobDetails/ActivityLog/activityLogTable';
import addActivityLog from '../../actions/activityLogAction';

function mapStateToProps(state) {
  return {
    activityLogData: state.activityLogData
  }
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addActivityLog: addActivityLog
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(activityLog);