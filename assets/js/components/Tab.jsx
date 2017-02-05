import React from 'react';

type Props = {
  title: string,
  id: string,
  tabWidth?: number,
  active?: boolean,
  disabled?: boolean
}

class Tab extends React.Component {
  props: Props;
  render() {
    return null;
  }
}

Tab.defaultProps = {
  active: false,
  disabled: false
};

export default Tab;