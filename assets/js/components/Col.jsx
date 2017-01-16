//@flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Element<*>,
  className?: string,
  l?: number,
  m?: number,
  s?: number,
  offset?: string
}

export default function ({
  children,
  className,
  s,
  m,
  l,
  offset,
  ...other
}: Props) {
  let sizes = { s, m, l };
  let classes = { col: true };
  ['s', 'm', 'l'].forEach(size => {
    if (sizes[size])
      classes[size + sizes[size]] = sizes[size];
  });

  if (offset) {
    offset.split(' ').forEach(off => {
      classes['offset-' + off] = true;
    });
  }

  return (
    <div {...other} className={classNames(classes, className)}>
      {children}
    </div>
  );
};
