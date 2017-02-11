import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = () => {return {};};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);