//@flow
import React from 'react';
import type {RouterContext} from 'react-router';
import Container from '../components/Container';
import TimetableContainer from '../containers/Timetable';

type Props = {
  router: RouterContext
}

export default class Timetable extends React.Component {
  props: Props;
  render() {
    return (
      <Container>
        <TimetableContainer/>
      </Container>
    );
  }
}