import React from 'react';
import $ from 'jquery';
import Container from '../components/Container';
import Row from '../components/Row';
import {ResetFilter} from '../containers';
import VisibleAttendeeTable from '../containers/VisibleAttendeeTable';
import NameSearchFilter from '../containers/NameSeatchFilter';
import TicketTypeFilter from '../containers/TicketTypeFilter';

export default class Attendees extends React.Component {
  render() {
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
  componentDidMount() {
    $('.dropdown-button').dropdown();
  }
}