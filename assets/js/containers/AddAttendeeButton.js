import {connect} from 'react-redux';
import AddAttendeeButton from '../components/AddAttendeeButton';
import {database} from '../firebase';

const mapStateToProps = () => {return {}};

const mapDispatchToProps = () => {
  return {
    handleAddAttendee: (attendee) => {
      const ref = database.ref('attendees').push();
      ref.set({
        id: attendee.id,
        name: attendee.name,
        ticket: attendee.ticket,
        type: attendee.type,
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAttendeeButton);