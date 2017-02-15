import React from 'react';
import $ from 'jquery';
import Container from '../components/Container';
import SpeakerTable from '../containers/SpeakerTable';
import TakePhoto from '../components/TakePhoto';

export default class Speaker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: ''
    };
  }

  render() {
    return (
      <Container>
        <SpeakerTable openModal={(id, name) => this.openModal(id, name)} />
        <TakePhoto id={this.state.id} name={this.state.name} ref="webcam" />
      </Container>
    );
  }

  componentDidMount() {
    this.modal = document.getElementById('speaker-modal');
    $(this.modal).modal({
      complete: () => this.refs.webcam.stopCapture()
    });
  }

  openModal(id, name) {
    this.setState({id, name});
    $(this.modal).modal('open');
  }
}
