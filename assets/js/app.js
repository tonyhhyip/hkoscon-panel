//@flow
'use strict';
import notice from './notice';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import createStore from './redux/store';
import fetchData from './fetch';

Promise.all(fetchData)
  .then((values) => createStore(values))
  .then(function (data) {
    ReactDOM.render(<AppRouter data={data} />, document.getElementById('react-root'));
    notice(data);
  });

