import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cardsEntry from '../components/HomePage/DashBoard/CardsEntry';
// import showJobDetails from '../actions/jobDetails';

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    // showJobDetails: showJobDetails,
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(cardsEntry);