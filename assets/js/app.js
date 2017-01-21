//@flow
'use strict';
import './notice';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';

fetch('/data/attendee.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ReactDOM.render(<AppRouter data={data} />, document.getElementById('react-root'));
  });

