import React from 'react';
import { connect } from 'react-redux';
import TimetableTab from '../components/TimetableTab';

const mapStateToProps = (state) => {
  return {
    schedule: state.schedule
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(TimetableTab);