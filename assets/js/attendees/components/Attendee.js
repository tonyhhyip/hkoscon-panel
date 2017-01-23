import React from 'react';

type Props = {
  name: string,
  id: string,
  type: string,
  ticket: string
}

export default function Attendee(props: Props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.ticket}</td>
      <td>{props.type}</td>
    </tr>
  );
}