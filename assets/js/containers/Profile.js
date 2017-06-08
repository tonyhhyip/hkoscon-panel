import { connect } from 'react-redux';
import Profile from '../components/Profile';
import {localCheckIn} from '../action';

function mapStateToProps(state, ownProps) {
  const { order } = ownProps;
  const attendee = state.attendees.find(a => a.ticket === order);
  const tshirt = state.tshirt[attendee.ticket] || attendee.ticket in state.tshirt ? state.tshirt[attendee.ticket] : {provide: '', request: ''};

  return Object.assign({}, attendee, { tshirt });
}

function mapDispatchToProps(dispatch) {
  return {
    handleLocalCheckIn: (id, status) => {
      dispatch(localCheckIn(id, status));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
