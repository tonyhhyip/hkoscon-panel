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

export default connect(mapStateToProps, mapDispatchToProp)(ResetButton);