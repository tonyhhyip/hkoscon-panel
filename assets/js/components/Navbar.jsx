import React from 'react';
import {Link} from 'react-router';
import {auth} from '../firebase';
import Container from './Container';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Bar user={this.props.user}/>
        <Dropdown />
      </div>
    )
  }

  componentDidMount() {
    $(document.getElementById('navbar-dropdown-button')).dropdown();
  }
}

function Bar(props) {
  return (
    <nav>
      <Container>
        <div className="nav-wrapper">
          <Link to="/" >HKOSCon</Link>
          <ul className="right">
            <li><Link to="/dashboard/attendees">Attendee</Link></li>
            <li><Link to="/dashboard/timetable">Timetable</Link></li>
            <li>
              <a className="dropdown-button" href="#" data-activates="navbar-dropdown" id="navbar-dropdown-button">
                {props.user ? props.user.displayName : ''}
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

function Dropdown() {
  return (
    <ul id="navbar-dropdown" className="dropdown-content">
      <li><Link to="/dashboard/setting">Setting</Link></li>
      <li className="divider" />
      <li><a href="#" onClick={() => auth.signOut()}>Sign Out</a></li>
    </ul>
  );
}