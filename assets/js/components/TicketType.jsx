import React from 'react';
import Col from './Col';

export default function TicketType(props) {
  const values = {
    normal: 'Normal',
    speaker: 'Speaker',
    staff: 'Staff'
  };
  const name = typeof props.value === 'string' ? values[props.value.toLowerCase()] || 'Ticket Type' : 'Ticket Type';
  return (
    <Col s={6} l={2}>
      <a className="dropdown-button btn" href="#" data-activates='ticket-type'>
        <i className="material-icons right">arrow_drop_down</i>
        {name}
      </a>
      <ul id="ticket-type" className="dropdown-content">
        <li><a href="#" onClick={props.handleClick('')}>Ticket Type</a></li>
        {Object.keys(values).map(key => {
          return (<li key={key}>
            <a href="#" onClick={props.handleClick(values[key])}>
              {values[key]}
            </a>
          </li>);
        })
        }
      </ul>
    </Col>
  )
}