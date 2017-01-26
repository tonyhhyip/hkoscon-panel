//@flow
import React from 'react';
import { connect } from 'react-redux'
import {filterName} from '../action'
import NameSearch from '../components/NameSearch';

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    handleChange: (value: string) => {
      console.log(value);
      dispatch(filterName(value ? value : ''));
    }
  }
};

const NameSearchFilter = connect(mapStateToProps, mapDispatchToProps)(NameSearch);

export default NameSearchFilter;