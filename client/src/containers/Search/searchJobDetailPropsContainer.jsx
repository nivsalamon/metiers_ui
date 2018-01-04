import React from 'react';
import { connect } from 'react-redux';
import searchJobDetails from '../../components/Homepage/Search/searchJobDetails';

function mapStateToProps (state) {
  return {
    jobDetails: state.searchJobDetails,
  }
}


export default connect(mapStateToProps)(searchJobDetails);