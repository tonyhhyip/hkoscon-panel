//@flow
import React from 'react';
import Col from './Col';

type Props = {
  handleReset: Function
}

type Context = {
  router: ContextRouter
}

export default function ResetButton(props: Props, context: Context) {
  const handleClick = () => {
    context.router.push({
      pathname: context.router.location.pathname
    });
    props.handleReset();
  };
  return (
    <Col s={6} l={3}><button className="btn" type="button" onClick={handleClick}>Reset</button></Col>
  );
}

ResetButton.contextTypes = {
  router: React.PropTypes.object
};