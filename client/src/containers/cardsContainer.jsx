import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cards from '../components/Homepage/Dashboard/Cards';

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
  };
}

export default connect(mapStateToProps)(cards);