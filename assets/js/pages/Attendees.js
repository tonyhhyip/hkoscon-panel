import React from 'react';
import $ from 'jquery';
import Container from '../components/Container';
import Row from '../components/Row';
import VisibleAttendeeTable from '../redux/containers/VisibleAttendeeTable';
import NameSearchFilter from '../redux/containers/NameSeatchFilter';
import TicketTypeFilter from '../redux/containers/TicketTypeFilter';

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