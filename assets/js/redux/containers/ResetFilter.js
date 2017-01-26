import React from 'react';
import { connect } from 'react-redux'
import {showAll} from '../action';
import ResetButton from '../components/ResetButton';

const mapStateToProps = () => {};

const mapDispatchToProp = (dispatch) => {
  return {
    handleReset: () => dispatch(showAll())
  }
};

const ResetFilter = connect(mapStateToProps, mapDispatchToProp)(ResetButton);

export default ResetFilter;