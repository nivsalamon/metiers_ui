import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditInfoDetails from '../../components/Homepage/Dashboard/JobDetails/EditInfo';
import jobDetailsAction from '../../actions/jobDetailsAdditional';

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    jobDetailsAction: jobDetailsAction,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    jobDetailsAdditional: state.jobDetailsAdditional,
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(EditInfoDetails);
