import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import applied from '../components/Homepage/Dashboard/Status/Applied';

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
  };
}

export default connect(mapStateToProps)(applied);
