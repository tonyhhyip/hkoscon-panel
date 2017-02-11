import {connect} from 'react-redux';
import {updateCheckIn} from '../action';
import WebCam from '../components/WebCam';

const mapStateToProps = () => {return {}};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheckIn: (id: string, result: boolean) => dispatch(updateCheckIn(id, result))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WebCam);