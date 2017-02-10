import React from 'react';
import {Link} from 'react-router';
import Container from './Container';

export default function Navbar() {
  return (
    <nav>
      <Container>
        <div className="nav-wrapper">
          <Link to="/" >HKOSCon</Link>
          <ul className="right">
            <li><Link to="/dashboard/attendees">Attendee</Link></li>
            <li><Link to="/dashboard/timetable">Timetable</Link></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}