//@flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  inline?: boolean,
  children?: React.Element<*>
}

export default function InputField(props: Props) {
  const className = classNames(props.className, 'input-field', {
    inline: props.inline
  });
  return <div className={className}>{props.children}</div>;
}