//@flow
'use strict';
import React from 'react';
import { IndexRoute, IndexRedirect, browserHistory, Router, Route } from 'react-router';
import Container from './Container';
import Dashboard from './pages/Dashboard';

type Props = {
  children: React.Element<*>
}

function EmptyRoute(props: Props) {
  return <div>{props.children}</div>
}

export default function AppRouter() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={EmptyRoute}>
        <IndexRedirect to="/dashboard"/>
        <Route path="/dashboard" component={Container}>
          <IndexRoute component={Dashboard} />
        </Route>
      </Route>
    </Router>
  );
};