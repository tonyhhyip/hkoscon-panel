import React from 'react';
import WebCam from 'react-webcam';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import firebase, {storage} from '../firebase';

export default class TakePhoto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: true,
      image: 'https://placehold.it/500x500'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({id: nextProps.id});
    if (nextProps.id) {
      this.fetchData(nextProps.id);
    }
  }

  fetchData(id) {
    const storageRef = storage.ref();
    storageRef.child(`image/${id}.png`)
      .getDownloadURL()
      .then(url => this.setState({image: url}))
      .catch(() => this.setState({image: 'https://placehold.it/500x500'}))
  }

  render() {
    return (
      <div id="speaker-modal" className="modal modal-fixed-footer">
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }

  renderFooter() {
    return (
      <div className="modal-footer">
        <button className="btn-flat modal-action modal-close" onClick={() => this.stopCapture()}>Close</button>
        <button className="btn-flat" onClick={() => this.setState({view: !this.state.view, photo: null})}>
          {this.state.view ? 'Take Photo' : 'View Photo'}
        </button>
      </div>
    );
  }

  renderContent() {
    if (!this.props.id) {
      return <div className="modal-content">Unknown</div>;
    }

    return (
      <div className="modal-content">
        <h4>{this.props.name}</h4>
        {this.state.view && this.renderImage()}
        {!this.state.view && !this.state.photo && this.renderCamera()}
        {this.state.photo && this.renderPreview()}
      </div>
    );
  }

  renderImage() {
    return (
      <Container>
        <Row>
          <Col s={12}>
            <img src={this.state.image} />
          </Col>
        </Row>
      </Container>
    )
  }

  renderPreview() {
    return (
      <Container>
        <Row>
          <Col s={12}>
            <img src={this.state.photo} />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <button className="btn-floating btn-large" onClick={() => this.removePhoto()}>
              <i className="material-icons">delete</i>
            </button>

            <button className="btn-floating btn-large" onClick={() => this.uploadPhoto()} disabled={this.state.upload}>
              <i className="material-icons">save</i>
            </button>
          </Col>
        </Row>
      </Container>
    );
  }

  renderCamera() {
    return (
      <Container>
        <Row>
          <Col s={12}>
            <WebCam ref="webcam" audio={false} screenshotFormat="image/png" height={500} />
          </Col>
        </Row>

        <Row>
          <Col s={12}>
            <button className="btn-floating btn-large" onClick={() => this.takePhoto()}>
              <i className="material-icons">camera_alt</i>
            </button>
          </Col>
        </Row>
      </Container>
    );
  }

  takePhoto() {
    this.refs.webcam.getCanvas().toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      this.setState({photo: url, blob});
    });
  }

  removePhoto() {
    this.setState({photo: null});
  }

  stopCapture() {
    this.setState({view: true, photo: null})
  }

  uploadPhoto() {
    this.setState({upload: true});

    const storageRef = storage.ref();
    const task = storageRef.child(`image/${this.state.id}.png`).put(this.state.blob);
    task.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      console.log(progress);
    }, e => console.error(e), () => {
      this.setState({upload: false, view: true, photo: null});
      this.fetchData(this.state.id);
    });
  }
}