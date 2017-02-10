import {connect} from 'react-redux';
import AddAttendeeButton from '../components/AddAttendeeButton';
import {addAttendee} from '../action';
import {database} from '../firebase';

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddAttendee: (attendee) => {
      const ref = database.ref('attendees').push();
      ref.set({
        id: attendee.id,
        name: attendee.name,
        ticket: attendee.ticket,
        type: attendee.type,
      });
      dispatch(addAttendee(attendee));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAttendeeButton);