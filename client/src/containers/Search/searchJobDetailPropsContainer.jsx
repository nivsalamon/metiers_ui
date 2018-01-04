import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchJobDetails from '../../components/HomePage/Jobs/Search/searchJobDetails';

function mapStateToProps (state) {
  return {
    jobDetails: state.searchJobDetails,
  }
}


export default connect(mapStateToProps)(searchJobDetails);