import React from 'react';
import CheckIn from './CheckIn';

type TableProps = {
  handleLocalCheckIn: Function
}

type SpeakerProps = {
  name: string,
  handleLocalCheckIn: Function
}

export default function SpeakerTable(props: TableProps) {
  return (
    <table className="responsive-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Check In</th>
        <th>Photo</th>
      </tr>
      </thead>
      <tbody>
      {props.speakers && props.speakers.map(speaker => (
        <Speaker
          key={speaker.id}
          handleLocalCheckIn={props.handleLocalCheckIn}
          name={speaker.name}
          checkIn={speaker.checkIn}
          id={speaker.id}
          openModal={() => props.openModal(speaker.id, speaker.name)}
        />))}
      </tbody>
    </table>
  )
}

function Speaker(props: SpeakerProps) {
  return (
    <tr>
      <td>{props.name}</td>
      <td><CheckIn {...props} handleClick={props.handleLocalCheckIn}/></td>
      <td><button className="btn" onClick={() => props.openModal()}>Photo</button></td>
    </tr>
  )
}