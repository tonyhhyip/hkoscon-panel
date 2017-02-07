import {connect} from 'react-redux';
import Timetable from '../components/Timetable';

const mapStateToProps = (state) => {
  return {
    schedule: state.schedule,
    venues: state.venues
  }
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Timetable);