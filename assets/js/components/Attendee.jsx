//@flow
import React from 'react';
import CheckIn from './CheckIn';

type Props = {
  name: string,
  id: string,
  type: string,
  ticket: string,
  checkIn: boolean | string,
  handleLocalCheckIn: Function
}

export default function Attendee(props: Props){
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.ticket}</td>
      <td>{props.type}</td>
      <td><CheckIn {...props} handleClick={props.handleLocalCheckIn}/></td>
    </tr>
  );

}