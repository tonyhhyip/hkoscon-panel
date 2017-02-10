//@flow
import React from 'react';
import { Provider } from 'react-redux';
import type {Store} from 'redux';
import { Redirect, IndexRedirect, browserHistory, Router, Route } from 'react-router';
import Container from './Container';
import Dashboard from './pages/Dashboard';
import Attendees from './pages/Attendees';
import Timetable from './pages/Timetable';

export default function AppRouter(props: {data: Store<Object, Object>}) {
  return (
    <Provider store={props.data}>
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRedirect to="/dashboard"/>
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Attendees} path="/dashboard/attendees" />
          <Route component={Timetable} path="/dashboard/timetable" />
          <Redirect to="/dashboard" from="*"/>
        </Route>
      </Router>
    </Provider>
  );
};