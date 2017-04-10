//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import $ from 'jquery';
import moment from 'moment-timezone';
import type { Store } from 'redux';
import { database } from '../firebase';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import {TEAMS} from '../constants';

type State = {
  body: string,
  title: string,
  target: string,
  error: boolean,
}

export default class Broadcast extends React.Component {
  state: State;
  context: Context;

  constructor(props: Object) {
    super(props);
    this.state = {
      body: '',
      title: '',
      target: 'broadcast-operation',

      error: false,
    };
  }

  componentDidMount() {
    $(document.getElementById('title')).focus();
    $(document.getElementById('broadcast-target')).material_select();
    $(ReactDOM.findDOMNode(this.refs.type)).on('change', e => this.setState({target: e.target.value}));
  }

  render() {
    const className = classnames('validate', { invalid: this.state.error });
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
                <input
                  type="text"
                  id="title"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                  className={className}
                  required
                />
                <label htmlFor="title">Title</label>
              </Col>
            </Row>
            <Row>
              <Col s={12} className="input-field">
                <textarea
                  className="materialize-textarea"
                  id="body"
                  value={this.state.body}
                  onChange={e => this.setState({ body: e.target.value })}
                />
                <label htmlFor="body">Body</label>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <button className="btn-flat" onClick={e => this.setState({body: e.target.value})}>Send</button>
                <button className="btn-flat" type="reset" onClick={() => this.setState({ title: '', body: '' })}>Reset</button>
              </Col>
            </Row>
          </Col>
        </form>
      </Container>
    );
  }

  handleBroadcast(e: Event) {
    e.preventDefault();
    if (this.state.title) {
      console.log(this.state);
      /*
      const ref = database.ref('broadcast').push();
      ref.set({
        time: moment().tz('Asia/Hong_Kong').format(),
        user: this.props.user.displayName,
        title: this.state.title,
        body: this.state.body,
        target: this.state.target,
      })
        .then(() => this.setState({ title: '', body: '' }));
        */
    } else {
      this.setState({ error: false })
    }
  }
}
