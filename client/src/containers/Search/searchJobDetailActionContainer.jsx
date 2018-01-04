import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchResultsEntry from '../../components/Homepage/Search/searchResultsEntry';
import showJobDetails from '../../actions/jobDetails';
import saveOrDeleteSearchedJobs from '../../actions/saveSearchedJobs';

function mapStateToProps (state) {
  return {
    savedSearchedJobs: state.savedSearchedJobs,
    dashboardLoad: state.dashboardLoad,
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    showJobDetails: showJobDetails,
    saveOrDeleteSearchedJobs: saveOrDeleteSearchedJobs,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(searchResultsEntry);