//@flow
import React from 'react';
import moment from 'moment';
import {database} from '../firebase';
import toastr from 'toastr';
import CheckIn from './CheckIn';

type Props = {
  name: string,
  id: string,
  type: string,
  ticket: string,
  checkIn: boolean | string,
  handleLocalCheckIn: Function
}

type State = {
  checkIn: boolean
}

export default class Attendee extends React.Component {
  props: Props;
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      checkIn: true
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.ticket}</td>
        <td>{this.props.type}</td>
        <td>{this.renderCheckInButton(!!this.props.checkIn)}</td>
      </tr>
    );
  }

  shouldComponentUpdate(nextProps: Props) {
    const checkIn = nextProps.checkIn !== this.props.checkIn && !!nextProps.checkIn;
    return true;
  }

  renderCheckInButton(checkIn: boolean) {
    if (checkIn && typeof this.props.checkIn === 'string') {
      return (
        <span>{moment(this.props.checkIn).format('HH:mm:ss')}</span>
      )
    } else {
      return (
        <CheckIn active={this.state.checkIn} handleClick={() => this.handleClick(this.props.id)} />
      );
    }
  }

  handleClick(id: string) {
    this.setState({checkIn: false});
    const now = moment();
    const date = now.format('YYYYMMDD');
    const timestamp = now.format();
    const update = {};
    update[`checkIn/${date}/${id}`] = timestamp;
    database.ref().update(update)
      .catch(e => console.trace(e));
    this.props.handleLocalCheckIn(id, timestamp);
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        content: {
          data: {
            id: this.props.id,
            name: this.props.name,
            ticket: this.props.ticket,
            type: this.props.type,
            checkIn: timestamp,
          },
          to: '/topics/check-in'
        },
        type: 'notice'
      });
    }
  }
}