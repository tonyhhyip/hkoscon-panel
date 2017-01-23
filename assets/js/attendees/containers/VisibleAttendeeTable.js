import React from 'react';
import { connect } from 'react-redux'
import AttendeeTable from '../components/AttendeeTable';

const getVisibleAttendee = (attendees = [], filter) => {
  if (filter === 'SHOW_ALL') {
    return attendees;
  }
  let result = attendees;
  if (filter.type) {
    result = result.filter(attendee => attendee.type === filter.type);
  }

  return result;
};

const mapStateToProps = (state) => {
  return {
    attendees: getVisibleAttendee(state.attendees, state.visibilityFilter)
  };
};

const mapDispatchToProps = () => {
  return {}
};

const VisibleAttendeeTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendeeTable);

export default VisibleAttendeeTable;