// @flow
import React from 'react';
import moment from 'moment';
import Container from './Container';
import Row from './Row';
import CheckIn from './CheckIn';

type Props = {
  id: string,
  name: string,
  ticket: string,
  type: string,
  checkIn: boolean,
  handleLocalCheckIn: Function,
}

export default function Profile(props: Props) {
  return (
    <Container>
      <Row>
        <div className="col s6 m4 l3">ID</div>
        <div className="col s6">{props.id}</div>
      </Row>
      <Row>
        <div className="col s6 m4 l3">Name</div>
        <div className="col s6">{props.name}</div>
      </Row>
      <Row>
        <div className="col s6 m4 l3">Ticket Type</div>
        <div className="col s6">{props.type}</div>
      </Row>
      <Row>
        <div className="col s6 m4 l3">Ticket Number</div>
        <div className="col s6">{props.ticket}</div>
      </Row>
      <Row>
        <div className="col s6 m4 l3">Check In</div>
        <div className="col s6 m4 l3">
          {props.checkIn ? moment(props.checkIn).format('HH:mm:ss') : <CheckIn {...props} handleClick={props.handleLocalCheckIn}/>}
          </div>
      </Row>
    </Container>
  )
}
