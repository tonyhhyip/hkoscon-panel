import {connect} from 'react-redux';
import {localCheckIn} from '../action';
import WebCam from '../components/WebCam';

const mapStateToProps = (state) => {
  return {
    attendees: state.attendees
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLocalCheckIn: (id, status) => {
      dispatch(localCheckIn(id, status));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WebCam);