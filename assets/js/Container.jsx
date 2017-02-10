//@flow
import React from 'react';
import Navbar from './containers/Navbar';

type Props = {
  children: React.Element<*>,
  route: {
    data: Object
  }
}

export default function Container(props: Props) {
  const children = React.Children.map(props.children, function (child) {
    return React.cloneElement(child, {data: props.route.data});
  });
  return (
    <div>
      <header><Navbar/></header>
      <main>{children}</main>
    </div>
  );
};