import React from 'react';
import { connect } from 'react-redux';
import jobInfoDetails from '../../components/Homepage/Dashboard/JobDetails/InitialInfo';

function mapStateToProps (state) {
  return {
    jobDetails: state.searchJobDetails,
    jobDetailsAdditional: state.jobDetailsAdditional,
  }
}

export default connect(mapStateToProps)(jobInfoDetails);