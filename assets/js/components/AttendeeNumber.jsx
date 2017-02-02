//@flow
import React from 'react';
import Card from './Card';

type Props = {
  value: number
}

export default function AttendeeNumber(props: Props) {
  return (
    <Card>
      <div className="card-content">
        <span className="card-title">Check In Attendee</span>
        <div>{props.value}</div>
      </div>
    </Card>
  );
}