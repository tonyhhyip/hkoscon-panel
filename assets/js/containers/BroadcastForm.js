import React from 'react';
import { connect } from 'react-redux';
import BroadcastForm from '../components/BroadcastForm';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastForm);
