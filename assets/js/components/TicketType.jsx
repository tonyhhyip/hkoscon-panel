//@flow
import React from 'react';
import $ from 'jquery';
import Col from './Col';

type Props = {
  handleClick: (key: string) => Function,
  value: string | null
}

export default class TicketType extends React.Component {
  props: Props;
  render() {
    const values = {
      normal: 'Normal',
      speaker: 'Speaker',
      staff: 'Staff'
    };
    const name = typeof this.props.value === 'string' ? values[this.props.value.toLowerCase()] || 'Ticket Type' : 'Ticket Type';
    return (
      <Col s={6} l={2}>
        <a className="dropdown-button btn" href="#" data-activates='ticket-type'>
          <i className="material-icons right">arrow_drop_down</i>
          {name}
        </a>
        <ul id="ticket-type" className="dropdown-content">
          <li><a href="#" onClick={this.props.handleClick('')}>Ticket Type</a></li>
          {Object.keys(values).map(key => {
            return (<li key={key}>
              <a href="#" onClick={this.props.handleClick(values[key])}>
                {values[key]}
              </a>
            </li>);
          })
          }
        </ul>
      </Col>
    )
  }

  componentDidUpdate() {
    $('.dropdown-button').dropdown();
  }

  componentDidMount() {
    $('.dropdown-button').dropdown();
  }
}