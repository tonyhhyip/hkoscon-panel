import React from 'react';
import $ from 'jquery';
import Col from './Col';
import AttendeeForm from './AttendeeForm';

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
        <a className="btn waves-effect" href="#attendee-modal">
          <i className="left material-icons">add</i>
          Add attendee
        </a>
        <AttendeeForm
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
