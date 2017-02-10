import React from 'react';
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

function ModalForm(props) {
  const handleChange = key => event => props.handleChange(key, event.target.value);
  return (
    <div id="add-attendee-modal" className="modal modal-fixed-footer">
      <form onSubmit={e => e.preventDefault()}>
        <div className="modal-content">
          <h4>Add Attendee</h4>
          <Row>
            <Col s={12}>
              <Row>
                <Col s={12} className="input-field">
                  <input id="attendee-id" type="text" value={props.id} onChange={handleChange('id')} />
                  <label htmlFor="attendee-id">ID</label>
                </Col>
              </Row>
              <Row>
                <Col s={12} className="input-field">
                  <input id="attendee-name" type="text" value={props.name} onChange={handleChange('name')} />
                  <label htmlFor="attendee-name">Name</label>
                </Col>
              </Row>
              <Row>
                <Col s={12} className="input-field">
                  <input id="attendee-ticket" type="text" value={props.ticket} onChange={handleChange('ticket')} />
                  <label htmlFor="attendee-ticket">Ticket ID</label>
                </Col>
              </Row>
              <Row>
                <Col s={12} className="input-field">
                  <select onChange={handleChange('type')} value={props.type}>
                    {TICKET_TYPES.map(type => <option value={type}>{type}</option>)}
                  </select>
                  <label>Ticket Type</label>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="modal-footer">
          <button className="modal-close modal-action waves-effect btn-flat" onClick={() => props.handleReset()}>Cancel</button>
          <button type="reset" className="btn-flat" onClick={() => props.handleReset()}>Reset</button>
          <button type="button" className="btn-flat" onClick={() => props.handleSubmit()}>Submit</button>
        </div>
      </form>
    </div>
  );
}