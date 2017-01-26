import React from 'react';
import Attendee from './Attendee';
import type attendee from './Attendee'

export default function AttendeeTable(props) {
  return (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Ticket ID</th>
        <th>Ticket Type</th>
        <th>Check In</th>
      </tr>
      </thead>
      <tbody>
      {props.attendees && props.attendees.map(data => <Attendee key={data.id} {...data}/>)}
      </tbody>
    </table>
  );
}