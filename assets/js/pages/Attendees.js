import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import VisibleAttendeeTable from '../attendees/containers/VisibleAttendeeTable';
import TicketTypeFilter from '../attendees/containers/TicketTypeFilter';

export default class Attendees extends React.Component {
  render() {
    return (
      <Container>
        <form>
          <Row>
            <TicketTypeFilter />
          </Row>
        </form>
        <VisibleAttendeeTable/>
      </Container>
    );
  }
  componentDidMount() {
    $('.dropdown-button').dropdown();
  }
}