import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import followUp from '../components/Homepage/Dashboard/Status/FollowUp';

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
  };
}

export default connect(mapStateToProps)(followUp);
