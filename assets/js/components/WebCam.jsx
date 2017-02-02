//@flow
import React from 'react';
import QrCode from 'qrcode-reader';
import toastr from 'toastr';
import Container from './Container';
import extract from '../feature/barcode';

type Props = {
  handleCheckIn: (id: string, result: boolean) => void
}

type State = {
  timeout: number | null,
  stream: Object | null,
  capture: boolean
}

export default class CheckIn extends React.Component {
  state: State;
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      timeout: null,
      stream: null,
      capture: false
    };
  }
  render() {
    return (
      <Container {...this.props}>
        <video width="500px" ref="video" />
        <canvas width="498px" height="375px" style={{display: 'none'}} ref="canvas" id="qr-canvas" />
        <Container>
          <button className="btn" onClick={this.toggleCapture.bind(this)}>
            {this.state.capture ? 'Stop' : 'Start'} Capture
          </button>
        </Container>
      </Container>
    )
  }

  componentWillUnmount() {
    this.stopCapture();
  }

  toggleCapture() {
    if (this.state.capture) {
      this.stopCapture();
    } else {
      this.startCapture();
    }
  }

  startCapture() {
    const self = this;
    const video = this.refs.video;
    const canvas = this.refs.canvas;
    const context = canvas.getContext('2d');
    let localMediaStream;

    const qrcode = new QrCode();

    const scan = function () {
      if (localMediaStream) {
        context.drawImage(video, 0, 0, 307, 250);
        try {
          qrcode.decode();
        } catch (e) {
          console.error(e);
        }
        self.setState({
          timeout: setTimeout(scan, 500)
        });
      } else {
        self.setState({
          timeout: setTimeout(scan, 500)
        });
      }
    };

    const successCallback = function (stream) {
      video.src = window.URL.createObjectURL(stream) || stream;
      localMediaStream = stream;
      self.setState({stream, timeout: setTimeout(scan, 1000)});
      video.play();
    };

    navigator.mediaDevices.getUserMedia({video: true})
      .then(successCallback)
      .catch(e => console.trace(e));

    qrcode.callback = function (result) {
      if (result)
        self.handleTicketScan(result);
    };

    this.setState({capture: true});
  }

  handleTicketScan(result: string) {
    const self = this;
    const {attendee} = extract(result);
    fetch(`/api/checkin/${attendee}`, {method: 'POST'})
      .then((response) => {
        if (response.status === 200) {
          toastr.success('Success Check In');
          self.props.handleCheckIn(attendee, true);
        } else {
          toastr.error('Fail to check in');
          self.props.handleCheckIn(attendee, false);
        }
      });
  }

  stopCapture() {
    if (this.state.stream) {
      this.state.stream.getVideoTracks().forEach((track) => {
        track.stop();
      });
    }

    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }

    this.setState({capture: false});
  }

}