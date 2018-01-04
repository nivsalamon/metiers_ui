import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchResults from '../../components/Homepage/Search/searchResults';
import saveOrDeleteSearchedJobs from '../../actions/saveSearchedJobs';
import searchJobs from '../../actions/searchJobs';

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    savedSearchedJobs: state.savedSearchedJobs,
    dashboardLoad: state.dashboardLoad,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    saveOrDeleteSearchedJobs: saveOrDeleteSearchedJobs,
    searchJobs: searchJobs,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(searchResults);