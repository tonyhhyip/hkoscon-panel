import {connect} from 'react-redux';
import AttendeeNumber from '../components/AttendeeNumber';

const mapStateToProps = (state) => {
  return {
    value: state.attendees.filter(attendee => attendee.checkIn).length
  }
};

const mapDispatchToProps = () => {return {}};

export default connect(mapStateToProps, mapDispatchToProps)(AttendeeNumber);