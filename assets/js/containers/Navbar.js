import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);