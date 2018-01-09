import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditInfoDetails from '../../components/Homepage/Dashboard/JobDetails/EditInfo';
import jobDetailsAction from '../../actions/jobDetailsAdditional';
import dashboardAction from '../../actions/dashboardLoad';

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    jobDetailsAction: jobDetailsAction,
    dashboardAction: dashboardAction,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    jobDetailsAdditional: state.jobDetailsAdditional,
    dashboardLoad: state.dashboardLoad,
    auth: state.auth,
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(EditInfoDetails);
