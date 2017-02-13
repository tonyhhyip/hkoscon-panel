//@flow
import type {Store} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import toastr from 'toastr';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import {TEAMS, DEFAULT_INFO} from '../constants';
import {database, auth} from '../firebase';

type State = {
  team: string
}

type Context = {
  store: Store<Object, Object>
}

export default class Setting extends React.Component {
  state: State;
  context: Context;

  constructor(props: Object, context: Context) {
    super(props, context);
    this.state = DEFAULT_INFO;
    if (auth.currentUser) {
      this.updateState(auth.currentUser);
    } else {
      auth.onAuthStateChanged((user) => {
        if (user)
          this.updateState(user);
      });
    }
  }

  updateState(user: Object) {
    database.ref(`/users/${user.uid}`).on('value', (snapshot) => {
      this.setState(snapshot.val());
    });
  }

  componentDidMount() {
    $('select').material_select();
    $(ReactDOM.findDOMNode(this.refs.team)).on('change', e => this.handleChange('team', e.target.value));
  }

  render() {
    return (
      <Container>
        <Row>
          <button className="btn waves-effect waves-light" onClick={() => this.handleSave()}>Save</button>
        </Row>
        <Row>
          <form>
            <Col s={12}>
              <Row>
                <Col s={6} className="input-field">
                  <select ref="team" value={this.state.team}>
                    {TEAMS.map(team => <option value={team} selected={this.state.team === team}>{team}</option>)}
                  </select>
                  <label>Team</label>
                </Col>
              </Row>
            </Col>
          </form>
        </Row>
      </Container>
    );
  }

  handleChange(key: string, value: string) {
    this.setState({[key]: value})
  }

  handleSave() {
    const state = this.context.store.getState();
    database.ref(`/users/${state.user.uid}`).set(this.state);
    toastr.success('Save Setting');
  }
}

Setting.contextTypes = {
  store: React.PropTypes.object
};