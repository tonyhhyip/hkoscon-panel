//@flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  children?: React.Element<*>
}

export default function Container(props: Props) {
  const className = classNames(props.className, 'container');
  return <div className={className} {...props}>{props.children}</div>;
}