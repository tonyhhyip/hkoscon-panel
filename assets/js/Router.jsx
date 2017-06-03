//@flow
import React from 'react';
import { Provider } from 'react-redux';
import type {Store} from 'redux';
import { Redirect, IndexRedirect, browserHistory, Router, Route } from 'react-router';
import Container from './Container';
import Broadcast from './pages/Broadcast';
import Dashboard from './pages/Dashboard';
import Attendees from './pages/Attendees';
import Timetable from './pages/Timetable';
import Setting from './pages/Setting';
import Speaker from './pages/Speaker';
import Ticket from './pages/Ticket';

export default function AppRouter(props: {data: Store<Object, Object>}) {
  return (
    <Provider store={props.data}>
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRedirect to="/dashboard"/>
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Attendees} path="/dashboard/attendees" />
          <Route component={Timetable} path="/dashboard/timetable" />
          <Route component={Setting} path="/dashboard/setting" />
          <Route component={Broadcast} path="/dashboard/broadcast" />
          <Route component={Speaker} path="/dashboard/speaker" />
          <Route component={Ticket} path="/dashboard/ticket" />
          <Redirect to="/dashboard" from="*"/>
        </Route>
      </Router>
    </Provider>
  );
};