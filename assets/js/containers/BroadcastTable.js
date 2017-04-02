import React from 'react';
import { connect } from 'react-redux'
import BroadcastTable from '../components/BroadcastTable';

const mapStateToProps = (state) => {
  return {
    broadcast: state.broadcast
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastTable);
