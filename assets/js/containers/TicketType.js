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
    handleClick: (value) => {
      if (value) {
        return () => dispatch(filterTicketType(value))
      } else {
        return () => dispatch(filterTicketType(null))
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketType);