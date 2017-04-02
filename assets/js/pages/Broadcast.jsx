//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import {TEAMS} from '../constants';

type State = {
  message: string,
  target: string
}

export default class Broadcast extends React.Component {
  state: State;
  constructor(props: Object) {
    super(props);
    this.state = {
      message: '',
      target: 'broadcast-operation'
    }
  }

  componentDidMount() {
    $(document.getElementById('broadcast-target')).material_select();
    $(ReactDOM.findDOMNode(this.refs.type)).on('change', e => this.setState({target: e.target.value}));
  }

  render() {
    return (
      <Container>
        <form className="row" onSubmit={e => this.handleBroadcast(e)}>
          <Col s={12}>
            <Row>
              <Col s={12} className="input-field">
                <select defaultValue="broadcast-operation" id="broadcast-target" ref="target">
                  {TEAMS.map(team => <option value={`boardcast-${team.toLowerCase()}`} key={team}>{team}</option>)}
                  <option value="broadcast-all">All Staff</option>
                  <option value="attendee" disabled>Attendee</option>
                </select>
                <label>Target</label>
              </Col>
            </Row>
            <Row>
              <Col s={12} className="input-field">
                <textarea
                  className="materialize-textarea"
                  id="message"
                  value={this.state.message}
                  onChange={e => this.handleChange(e)}
                />
                <label htmlFor="message">Message</label>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <button className="btn-flat" onClick={e => this.handleBroadcast(e)}>Send</button>
                <button className="btn-flat" type="reset">Reset</button>
              </Col>
            </Row>
          </Col>
        </form>
      </Container>
    );
  }

  handleChange(e: Object) {
    this.setState({message: e.target.value});
  }

  handleBroadcast(e: Event) {
    e.preventDefault();
  }
}