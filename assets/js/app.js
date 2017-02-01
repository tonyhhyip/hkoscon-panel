//@flow
'use strict';
import notice from './notice';
import React from 'react';
import ReactDOM from 'react-dom';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import AppRouter from './Router';
import createStore from './redux/store';
import fetchData from './fetch';

runtime.register({
  scope: `https://${location.host}/`
})
  .catch(e => console.log(e))
  .then(() => Promise.all(fetchData))
  .then((values) => createStore(values))
  .then(function (data) {
    ReactDOM.render(<AppRouter data={data} />, document.getElementById('react-root'));
    notice(data);
  });