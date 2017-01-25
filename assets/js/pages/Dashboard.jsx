import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import {Card, Content} from '../components/Card';
import Clock from '../components/Clock';

export default class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col s={6} l={3}>
            <Card>
              <Content style={{fontSize: '2rem'}}>
                Time: <Clock/>
              </Content>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}