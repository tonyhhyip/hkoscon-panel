import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import TimetableTab from '../containers/TimetableTab';

export default class Timetable extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col s={12}>
            <TimetableTab/>
          </Col>
        </Row>
      </Container>
    );
  }
}