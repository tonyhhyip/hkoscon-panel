//@flow
'use strict';
import React from 'react';
import { Redirect, IndexRoute, IndexRedirect, browserHistory, Router, Route } from 'react-router';
import Container from './Container';
import Dashboard from './pages/Dashboard';
import Attendees from './pages/Attendees';

type Props = {
  children: React.Element<*>
}

function EmptyRoute(props: Props) {
  return <div>{props.children}</div>
}

type RouteProps = {
  data: Object;
}


export default function AppRouter(props: RouteProps) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container} data={props.data}>
        <IndexRedirect to="/dashboard"/>
        <Route path="/dashboard" component={Dashboard} />
        <Route component={Attendees} path="/dashboard/attendees" />
        <Redirect to="/dashboard" from="*"/>
      </Route>
    </Router>
  );
};