import {connect} from 'react-redux';
import {localCheckIn} from '../action';
import SpeakerTable from '../components/SpeakerTable';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    speakers: state.attendees.filter(attendee => attendee.type === 'Speaker')
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLocalCheckIn: (id, status) => {
      dispatch(localCheckIn(id, status));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakerTable);
