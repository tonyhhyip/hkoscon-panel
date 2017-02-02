import React from 'react';

type Props = {
  handleClick: Function,
  active: boolean
}

export default function CheckIn(props: Props) {
  return <button type="button" className="btn" disabled={!props.active} onClick={props.handleClick}>Check in</button>;
}