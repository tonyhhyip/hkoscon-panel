//@flow
import React from 'react';
import Col from './Col';

type Props = {
  handleReset: Function
}

export default function ResetButton(props: Props) {
  return <Col s={6} l={3}><button className="btn" type="button" onClick={props.handleReset}>Reset</button></Col>;
}