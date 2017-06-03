import { connect } from 'react-redux'
import AttendeeTable from '../components/AttendeeTable';
import {localCheckIn} from '../action';

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
    handleLocalCheckIn: (id, status) => {
      dispatch(localCheckIn(id, status));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AttendeeTable);