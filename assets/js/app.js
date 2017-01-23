//@flow
'use strict';
import './notice';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import createStore from './attendees/store';

fetch('/data/attendee.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    return Object.keys(data).map(function (id) {
      const attendee = data[id];
      return {
        id,
        name: attendee.name,
        ticket: attendee.ticket,
        type: attendee.type
      }
    });
  })
  .then(attendees => createStore({attendees}))
  .then(function (attendees) {
    ReactDOM.render(<AppRouter data={attendees} />, document.getElementById('react-root'));
  });

