import {connect} from 'react-redux';
import AddAttendeeButton from '../components/AddAttendeeButton';
import {addAttendee} from '../action';
import {database} from '../firebase';

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddAttendee: (attendee) => {
      database.ref(`users/${attendee.id}`).set({
        name: attendee.name,
        ticket: attendee.ticket,
        type: attendee.type,
      });
      dispatch(addAttendee(attendee));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAttendeeButton);