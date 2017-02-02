//@flow
import React from 'react';
import CheckIn from './CheckIn';

type Props = {
  name: string,
  id: string,
  type: string,
  ticket: string,
  checkIn: boolean,
  handleCheckIn: Function
}

export default class Attendee extends React.Component {
  props: Props;
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.ticket}</td>
        <td>{this.props.type}</td>
        <td><CheckIn active={!this.props.checkIn} handleClick={this.props.handleCheckIn(this.props.id)}/></td>
      </tr>
    );
  }

  shouldComponentUpdate(nextProps: Props) {
    return nextProps.checkIn !== this.props.checkIn;
  }
}