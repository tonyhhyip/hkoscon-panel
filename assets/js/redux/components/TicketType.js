import React from 'react';

export default function TicketType(props) {
  const values = {
    normal: 'Normal',
    speaker: 'Speaker',
    staff: 'Staff'
  };
  const name = typeof props.value === 'string' ? values[props.value.toLowerCase()] || 'Ticket Type' : 'Ticket Type';
  return (
    <div className="col s6 l3">
      <a className="dropdown-button btn" href="#" data-activates='ticket-type'>
        {name}
        <i className="material-icons">arrow_drop_down</i>
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
    </div>
  )
}