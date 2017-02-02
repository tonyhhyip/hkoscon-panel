import {connect} from 'react-redux';
import AttendeeNumber from '../components/AttendeeNumber';

const mapStateToProps = (state) => {
  return {
    value: state.attendees.filter(attendee => attendee.checkIn).length
  }
};

const mapDispatchToProps = () => {};

const InstanceAttendee = connect(mapStateToProps, mapDispatchToProps)(AttendeeNumber);

export default InstanceAttendee;