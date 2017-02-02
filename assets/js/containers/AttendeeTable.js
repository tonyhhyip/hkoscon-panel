import React from 'react';
import { connect } from 'react-redux'
import toastr from 'toastr';
import AttendeeTable from '../components/AttendeeTable';
import {updateCheckIn} from '../action';

const getVisibleAttendee = (attendees = [], filter) => {
  if (filter === 'SHOW_ALL') {
    return attendees;
  }
  let result = attendees;
  if (filter.type) {
    result = result.filter(attendee => attendee.type === filter.type);
  }

  if (filter.name) {
    result = result.filter(attendee => filter.name.test(attendee.name));
  }

  return result;
};

const mapStateToProps = (state) => {
  return {
    attendees: getVisibleAttendee(state.attendees, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkIn: (id) => {
      return function () {
        fetch(`/api/checkin/${id}`, {method: 'POST'})
          .then(function (response) {
            if (response.status === 200) {
              toastr.success('Check in Success');
              dispatch(updateCheckIn(id, true));
            }
          })
          .catch((e) => {
            toastr.error('Fail to check in');
            console.error(e);
            dispatch(updateCheckIn(id, false));
          })
      };
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AttendeeTable);