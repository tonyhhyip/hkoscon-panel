import React from 'react';
import $ from 'jquery';
import Container from '../components/Container';
import Row from '../components/Row';
import VisibleAttendeeTable from '../attendees/containers/VisibleAttendeeTable';
import NameSearchFilter from '../attendees/containers/NameSeatchFilter';
import TicketTypeFilter from '../attendees/containers/TicketTypeFilter';

export default class Attendees extends React.Component {
  render() {
    return (
      <Container>
        <form>
          <Row>
            <NameSearchFilter/>
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