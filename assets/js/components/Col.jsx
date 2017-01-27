//@flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  children?: React.Element<*>,
  className?: string,
  l?: number,
  m?: number,
  s?: number,
  offset?: string
}

export default function (props: Props) {
  let sizes = { s: props.s, m: props.m, l: props.l };
  let classes = { col: true };
  ['s', 'm', 'l'].forEach(size => {
    if (sizes[size])
      classes[size + sizes[size]] = sizes[size];
  });

  if (props.offset) {
    props.offset.split(' ').forEach(off => {
      classes['offset-' + off] = true;
    });
  }

  return (
    <div {...props} className={classNames(classes, props.className)}>
      {props.children}
    </div>
  );
};
