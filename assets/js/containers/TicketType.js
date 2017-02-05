import React from 'react';
import { connect } from 'react-redux'
import {filterTicketType} from '../action'
import TicketType from '../components/TicketType';

const mapStateToProps = (state) => {
  return {
    value: state.visibilityFilter && typeof state.visibilityFilter === 'object' ? state.visibilityFilter.type : ''
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (value) => dispatch(filterTicketType(value ? value : null))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketType);