//@flow
import React from 'react';
import InputField from './InputField';

type Props = {
  handleChange: Function,
  value?: string
}

type State = {
  value: string
}

type Context = {
  router: ContextRouter
}

export default class NameSearch extends React.Component {
  props: Props;
  state: State;
  context: Context;

  constructor(props: Props, context: Context) {
    super(props, context);
    const value = this.props.value;
    this.state = {
      value: value && value !== '/(?:)/gi' ? value.toString().replace('/gi', '').replace(/^\//, '') : ''
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const value = nextProps.value;
    this.setState({
      value: value && value.toString() !== '/(?:)/gi' ? value.toString().replace('/gi', '').replace(/^\//, '') : ''
    });
  }

  handleChange(e: Object) {
    const {value} = e.target;
    this.setState({value});
    this.props.handleChange(value);
    const {router} = this.context;
    let query = Object.assign({}, router.location.query, {
      name: value
    });
    if (!value) {
      delete query.name;
    }

    router.push({
      query,
      pathname: router.location.pathname,
    });
  }

  render() {
    return (
      <InputField inline className="col l3 s6">
        <input name="name" id="name-search" type="text" onChange={event => this.handleChange(event)} value={this.state.value} />
        <label htmlFor="name-search">Name</label>
      </InputField>
    );
  }
};

NameSearch.contextTypes = {
  router: React.PropTypes.object
};