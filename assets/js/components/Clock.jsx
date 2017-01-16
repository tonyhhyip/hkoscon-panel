//@flow
import React from 'react';
import moment from 'moment';
type State = {
  time: string
}
export default class Clock extends React.Component {

  state: State;

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
    setInterval(() => {
      this.setState({
        time: moment().format('hh:mm:ss')
      });
    }, 500);
  }
}