import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditJobNotes from '../../components/Homepage/Dashboard/JobDetails/Notes';
import jobDetailsAction from '../../actions/jobDetailsAdditional';

function mapStateToProps(state) {
  return {
    jobDetailsAdditional: state.jobDetailsAdditional,
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    jobDetailsAction: jobDetailsAction,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EditJobNotes);
