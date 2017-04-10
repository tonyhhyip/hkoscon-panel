import React from 'react';
import moment from 'moment-timezone';
import $ from 'jquery';
import Container from './Container';

export default class BroadcastTable extends React.Component {
  render() {
    return (
      <Container>
        <ul className="collapsible" data-collapsible="expendable">
          {this.props.broadcast.map(broadcast => (
            <li key={broadcast.target + broadcast.user + broadcast.time}>
              <div className="collapsible-header">
                <span className="title">
                  {broadcast.title}
                  &nbsp;
                </span>
                <small>
                  {broadcast.user}
                  &nbsp;
                  &rarr;
                  &nbsp;
                  {broadcast.target.replace('broadcast-', '')}
                  &nbsp;
                  @
                  {moment(broadcast.time).tz('Asia/Hong_Kong').format('D/M/YYYY HH:mm:ss')}
                </small>
              </div>
              <div className="collapsible-body">
                <p>{broadcast.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    );
  }

  componentDidMount() {
    $('.collapsible').collapsible();
  }
}
