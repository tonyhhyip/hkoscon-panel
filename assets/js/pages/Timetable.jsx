import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import TimetableDayTab from '../containers/TimetableDayTab';

export default class Timetable extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col s={12}>
            <TimetableDayTab/>
          </Col>
        </Row>
      </Container>
    );
  }
}