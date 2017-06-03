import React from 'react';
import QrReader from 'react-qr-reader';
import Container from '../components/Container';
import Row from '../components/Row';
import Profile from '../containers/Profile';
import extract from '../feature/barcode';

export default class Ticket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      facing: 'rear',
      capture: true,
      order: '',
    };
  }

  handleScan(data) {
    if (!data) return;
    const { order } = extract(data);
    this.setState({ order, capture: false });
  }

  handleSwitchSide() {
    this.setState({ facing: this.state.facing === 'front' ? 'rear' : 'front'})
  }

  renderCapture() {
    const previewStyle = {
      textAlign: 'center',
      display: 'inline-block'
    };
    return (
      <Container>
        <Container>
          <form onSubmit={e => {e.preventDefault(); this.setState({ capture: false })}}>
            <Row>
              <div className="input-field col s12 m8 l6">
                <input id="ticket-number" type="number" value={this.state.order} onChange={e => this.setState({ order: e.target.value })} />
                <label htmlFor="ticket-number">Ticket</label>
              </div>
              <div className="col s12 m4 l6">
                <button className="btn" onClick={() => this.setState({ capture: false })}>Check</button>
              </div>
            </Row>
          </form>
        </Container>
        <Container style={{textAlign: 'center'}}>
          <button className="btn" onClick={() => this.handleSwitchSide()}>Switch Side</button>
        </Container>
        <QrReader
          delay={500}
          style={previewStyle}
          onScan={data => this.handleScan(data)}
          onError={console.error}
          facingMode={this.state.facing}
        />
      </Container>
    );
  }

  render() {
    return (
      <div>
        {this.state.capture && this.renderCapture()}
        {!this.state.capture && <Profile order={this.state.order} /> }
        {!this.state.capture && (
          <Container style={{textAlign: 'center'}}>
            <button className="btn" onClick={() => this.setState({ order: '', capture: true })}>
              Scan Ticket
            </button>
          </Container>) }
      </div>
    )
  }
}
