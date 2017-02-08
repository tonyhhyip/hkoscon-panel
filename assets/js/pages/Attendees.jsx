//@flow
import React from 'react';
import type {Store} from 'redux';
import Container from '../components/Container';
import Row from '../components/Row';
import ResetButton from '../containers/ResetButton';
import AttendeeTable from '../containers/AttendeeTable';
import NameSearch from '../containers/NameSeatch';
import TicketType from '../containers/TicketType';
import AddAttendeeButton from '../containers/AddAttendeeButton';
import {filterName, filterTicketType} from '../action';

type Context = {
  router: ContextRouter,
  store: Store<Object, Object>
}

function dispatchQuery(query:Object, key: string, store: Store<Object, Object>, actionConstructor: Function) {
  if (key in query) {
    const action = actionConstructor(query[key]);
    store.dispatch(action);
  }
}

function dispatch(router: ContextRouter, store: Store<Object, Object>) {
  if (router.location.query) {
    const {query} = router.location;
    dispatchQuery(query, 'name', store, filterName);
    dispatchQuery(query, 'type', store, filterTicketType);
  }
}

export default class Attendees extends React.Component {
  constructor(props: Object, context: Context) {
    super(props, context);
    dispatch(this.context.router, this.context.store);
  }

  render() {
    return (
      <Container>
        <form onSubmit={e => e.preventDefault()}>
          <Row>
            <NameSearch />
            <TicketType />
            <ResetButton />
            <AddAttendeeButton />
          </Row>
        </form>
        <AttendeeTable/>
      </Container>
    );
  }
}

Attendees.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.object,
};