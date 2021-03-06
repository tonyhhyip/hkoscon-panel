import React from 'react';
import { connect } from 'react-redux'
import {filterName} from '../action'
import NameSearch from '../components/NameSearch';

const mapStateToProps = (state) => {
  return {
    value: state.visibilityFilter.name
  }
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    handleChange: (value: string) => {
      dispatch(filterName(value ? value : ''));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NameSearch);