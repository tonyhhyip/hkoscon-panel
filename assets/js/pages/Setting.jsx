import React from 'react';
import toastr from 'toastr';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import {TEAMS, DEFAULT_INFO} from '../constants';
import {database, auth} from '../firebase';

export default class Setting extends React.Component {
  constructor(props, context) {
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

  updateState(user) {
    database.ref(`/users/${user.uid}`).on('value', (snapshot) => {
      this.setState(snapshot.val());
    });
  }

  componentDidMount() {
    $('.dropdown-button').dropdown();
  }

  render() {
    const handleClick = (key, value) => event => {
      event.preventDefault();
      this.handleChange(key, value);
    };
    return (
      <Container>
        <Row>
          <button className="btn waves-effect waves-light" onClick={() => this.handleSave()}>Save</button>
        </Row>
        <Row>
          <form>
            <Col s={12}>
              <Row>
                <Col s={6}>
                  <a className="dropdown-button btn" href="#" data-activates='ticket-type'>
                    <i className="material-icons right">arrow_drop_down</i>
                    {this.state.team}
                  </a>
                  <ul id="ticket-type" className="dropdown-content">
                    {TEAMS.map(team => {
                      return (<li key={team}>
                        <a href="#" onClick={handleClick('team', team)}>
                          {team}
                        </a>
                      </li>);
                    })}
                  </ul>
                </Col>
              </Row>
            </Col>
          </form>
        </Row>
      </Container>
    );
  }

  handleChange(key, value) {
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