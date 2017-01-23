import React from 'react';
import { Provider } from 'react-redux'
import { Redirect, IndexRedirect, browserHistory, Router, Route } from 'react-router';
import Container from './Container';
import Dashboard from './pages/Dashboard';
import Attendees from './pages/Attendees';
import CheckIn from './pages/CheckIn';

export default function AppRouter(props) {
  return (
    <Provider store={props.data}>
      <Router history={browserHistory}>
        <Route path="/" component={Container} data={props.data}>
          <IndexRedirect to="/dashboard"/>
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Attendees} path="/dashboard/attendees" />
          <Route component={CheckIn} path="/dashboard/check-in" />
          <Redirect to="/dashboard" from="*"/>
        </Route>
      </Router>
    </Provider>
  );
};