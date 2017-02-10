import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Col from './Col';
import Row from './Row';
import {TICKET_TYPES} from '../constants';

export default class AddAttendeeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: '',
        name: '',
        ticket: '',
        type: 'Normal'
      }
    }
  }

  render() {
    return (
      <Col s={6} l={3}>
        <Button/>
        <ModalForm
          handleChange={(key, value) => this.handleChange(key, value)}
          handleReset={() => this.handleReset()}
          handleSubmit={() => this.handleSubmit()}
          {...this.state.form}
        />
      </Col>
    );
  }

  componentDidMount() {
    $('select').material_select();
    $('.modal').modal();
  }

  handleChange(key, value) {
    this.setState({form: Object.assign(this.state.form, {[key]: value})});
  }

  handleReset() {
    this.setState({
      form: {
        id: '',
        name: '',
        ticket: '',
        type: 'Normal'
      }
    })
  }

  handleSubmit() {
    this.props.handleAddAttendee(this.state.form);
    $(document.getElementById('add-attendee-modal')).modal('close');
  }

}

function Button() {
  return (
    <a className="btn waves-effect" href="#add-attendee-modal">
      <i className="left material-icons">add</i>
      Add attendee
    </a>
  )
}

class ModalForm extends React.Component {
  render() {
    const handleChange = key => event => {
      debugger;
      this.props.handleChange(key, event.target.value)
    };
    return (
      <div id="add-attendee-modal" className="modal modal-fixed-footer">
        <form onSubmit={e => e.preventDefault()}>
          <div className="modal-content">
            <h4>Add Attendee</h4>
            <Row>
              <Col s={12}>
                <Row>
                  <Col s={12} className="input-field">
                    <input id="attendee-id" type="text" value={this.props.id} onChange={handleChange('id')}/>
                    <label htmlFor="attendee-id">ID</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={12} className="input-field">
                    <input id="attendee-name" type="text" value={this.props.name} onChange={handleChange('name')}/>
                    <label htmlFor="attendee-name">Name</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={12} className="input-field">
                    <input id="attendee-ticket" type="text" value={this.props.ticket} onChange={handleChange('ticket')}/>
                    <label htmlFor="attendee-ticket">Ticket ID</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={12} className="input-field">
                    <select ref="type" value={this.props.type}>
                      {TICKET_TYPES.map(type => <option value={type}>{type}</option>)}
                    </select>
                    <label>Ticket Type</label>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="modal-footer">
            <button className="modal-close modal-action waves-effect btn-flat" onClick={() => this.props.handleReset()}>
              Cancel
            </button>
            <button type="reset" className="btn-flat" onClick={() => this.props.handleReset()}>Reset</button>
            <button type="button" className="btn-flat" onClick={() => this.props.handleSubmit()}>Submit</button>
          </div>
        </form>
      </div>
    );
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.type)).on('change', e => this.props.handleChange('type', e.target.value) );
  }
}