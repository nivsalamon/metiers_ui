import React from 'react';
import { connect } from 'react-redux';
import EditInfoDetails from '../../components/Homepage/Dashboard/JobDetails/EditInfo';

function mapStateToProps(state) {
  return {
    jobDetailsAdditional: state.jobDetailsAdditional,
  };
}

export default connect(mapStateToProps)(EditInfoDetails);
