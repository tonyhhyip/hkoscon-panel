//@flow
import React from 'react';
import InputField from '../../components/InputField';

type Props = {
  handleChange: Function
}

type State = {
  value: string
}

export default class NameSearch extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props, context: Object) {
    super(props, context);
    this.state = {
      value: ''
    }
  }

  handleChange(e: Object) {
    const {value} = e.target;
    this.setState({value});
    this.props.handleChange(value);
  }

  render() {
    return (
      <InputField inline className="col l3 s6">
        <input id="name-search" type="text" onChange={this.handleChange.bind(this)} value={this.state.value} />
        <label htmlFor="name-search">Name</label>
      </InputField>
    );
  }

  shouldComponentUpdate(nextProps: any, nextState: State) {
    return nextState.value !== this.state.value;
  }
};