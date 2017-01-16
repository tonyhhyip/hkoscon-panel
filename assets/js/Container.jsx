//@flow
import React from 'react';
import Navbar from './components/Navbar';

type Props = {
  children: React.Element<*>
}

export default function Container(props: Props) {
  return (
    <div>
      <header><Navbar/></header>
      <main>{props.children}</main>
    </div>
  );
};