//@flow
import React from 'react';
import moment from 'moment';
import {database} from '../firebase';
import sendNotice from '../feature/notice';

type Props = {
  handleClick: Function,
  checkIn: boolean | string,
  id: string,
  name: string,
  ticket: string,
  type: string
}

type State = {
  checkIn: boolean
}

export default class CheckIn extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      checkIn: true
    };
  }

  render() {
    if (this.props.checkIn && typeof this.props.checkIn === 'string') {
      return <span>{moment(this.props.checkIn).format('HH:mm:ss')}</span>;
    } else {
      return (
        <button className="btn" disabled={!this.state.checkIn} onClick={() => this.handleClick(this.props.id)}>
          <i className="material-icons left">done</i>
          Check in
        </button>
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
    this.props.handleClick(id, timestamp);
    sendNotice({
      data: {
        id: this.props.id,
        name: this.props.name,
        ticket: this.props.ticket,
        type: this.props.type,
        checkIn: timestamp,
      },
      to: '/topics/check-in'
    });
  }
}