import React from 'react';
import classNames from 'classnames';

export default class CheckInButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disable: false,
      display: true
    };
  }

  render() {
    return <span>{this.state.display && this.renderButton()}</span>
  }

  renderButton() {
    const className = classNames('waves-effect waves-light btn', {disabled: this.state.disable});
    return (
      <button type="button" className={className} onClick={this.handleButtonClick.bind(this)}>
        Check In
      </button>
    );
  }

  handleButtonClick() {
    this.setState({disable: true});
    fetch(`/api/checkIn/${this.props.id}`, {
      method: 'POST'
    })
      .then((response) => {
        /* global toastr */
        if (response.status === 200) {
          toastr.success('Success check in: ', this.props.name);
          this.setState({display: false});
        } else {
          toastr.error('Fail to check in');
          this.setState({disable: false});
        }
      })
  }
}