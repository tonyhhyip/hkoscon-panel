//@flow
import React from 'react';
import Attendee from './Attendee';

type AttendeeData = {
  id: string,
  name: string,
  type: string,
  checkIn: boolean,
  ticket: string
}

type Props = {
  attendees: Array<AttendeeData>,
  checkIn: Function
}

export default function AttendeeTable(props: Props) {
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
      {props.attendees && props.attendees.map((data: AttendeeData) => {
        return <Attendee
          key={data.id} handleCheckIn={props.checkIn}
          name={data.name} id={data.id} type={data.type}
          checkIn={data.checkIn} ticket={data.ticket}
        />;
      })}
      </tbody>
    </table>
  );
}