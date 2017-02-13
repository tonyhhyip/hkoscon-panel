//@flow
import React from 'react';
import QrCode from 'qrcode-reader';
import moment from 'moment';
import {database} from '../firebase';
import sendNotice from '../feature/notice'
import Container from './Container';
import extract from '../feature/barcode';

type Props = {
  handleLocalCheckIn: (id: string, result: boolean) => void,
  style?: Object,
  attendees: Array<Object>
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
      <Container style={this.props.style}>
        <video width={`${this.state.capture ? 500 : 0}px`} ref="video" />
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
    const qrcode = new QrCode();

    const successCallback = function (stream) {
      video.src = window.URL.createObjectURL(stream) || stream;
      const scan = function () {
        if (stream) {
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
      self.setState({stream, timeout: setTimeout(scan, 1000)});
      video.play();
    };

    navigator.mediaDevices.getUserMedia({video: true})
      .then(successCallback)
      .catch(e => console.trace(e));

    qrcode.callback = function (result) {
      console.info(result);
      if (result)
        self.handleTicketScan(result);
    };

    this.setState({capture: true});
  }

  handleTicketScan(result: string) {
    const {attendee} = extract(result);
    const now = moment();
    const date = now.format('YYYYMMDD');
    const timestamp = now.format();
    const update = {};
    update[`checkIn/${date}/${attendee}`] = timestamp;
    database.ref().update(update)
      .catch(e => console.trace(e));
    this.props.handleLocalCheckIn(attendee, timestamp);
    const detail = this.props.attendees.filter(a => a.id === attendee)[0];
    sendNotice({
      data: {
        id: detail.id,
        name: detail.name,
        ticket: detail.ticket,
        type: detail.type,
        checkIn: timestamp,
      },
      to: '/topics/check-in'
    })
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