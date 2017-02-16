import React from 'react';
import {TICKET_TYPES} from '../constants';
import Col from './Col';
import Row from './Row';

export default class AttendeeForm extends React.Component {
  render() {
    const handleChange = key => event => this.props.handleChange(key, event.target.value);
    return (
      <div id="attendee-modal" className="modal modal-fixed-footer">
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
                    <select ref="type" defaultValue={this.props.type}>
                      {TICKET_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
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
    $(document.getElementById('attendee-modal')).on('change', e => this.props.handleChange('type', e.target.value) );
  }
}