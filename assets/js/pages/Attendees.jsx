//@flow
import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import ResetButton from '../containers/ResetButton';
import AttendeeTable from '../containers/AttendeeTable';
import NameSearch from '../containers/NameSeatch';
import TicketType from '../containers/TicketType';

export default function Attendees(){
  return (
    <Container>
      <form onSubmit={e => e.preventDefault()}>
        <Row>
          <NameSearch/>
          <TicketType />
          <ResetButton />
        </Row>
      </form>
      <AttendeeTable/>
    </Container>
  );
}