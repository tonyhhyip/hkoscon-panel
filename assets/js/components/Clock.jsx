//@flow
import React from 'react';
import moment from 'moment';
type State = {
  time: string
}
export default class Clock extends React.Component {

  state: State;
  interval: number;
  constructor(props: Object) {
    super(props);
    this.state = {
      time: 'loading'
    };
  }

  render() {
    return <span {...this.props}>{this.state.time}</span>;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: moment().format('hh:mm:ss')
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}