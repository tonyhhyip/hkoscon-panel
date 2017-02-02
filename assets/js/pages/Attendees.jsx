//@flow
import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import ResetFilter from '../containers/ResetFilter';
import VisibleAttendeeTable from '../containers/VisibleAttendeeTable';
import NameSearchFilter from '../containers/NameSeatchFilter';
import TicketTypeFilter from '../containers/TicketTypeFilter';

export default function Attendees(){
  return (
    <Container>
      <form onSubmit={e => e.preventDefault()}>
        <Row>
          <NameSearchFilter/>
          <TicketTypeFilter />
          <ResetFilter />
        </Row>
      </form>
      <VisibleAttendeeTable/>
    </Container>
  );
}