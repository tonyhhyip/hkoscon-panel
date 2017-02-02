//@flow
import React from 'react';
import $ from 'jquery';

type Props = {
  schedule: Array<Object>
}

export default class TimetableTab extends React.Component {
  props: Props;

  render() {
    return (
      <ul className="tabs tabs-fixed-width">
        {this.props.schedule && this.props.schedule.map((_, index) => {
          return <li className="tab col s3"><a href={`#day${index + 1}`}>{`Day ${index + 1}`}</a></li>;
        })}
      </ul>
    );
  }
  componentDidMount() {
    $('ul.tabs').tabs();
  }

  componentDidUpdate() {
    $('ul.tabs').tabs();
  }
}