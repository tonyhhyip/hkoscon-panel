//@flow
import notice from './notice';
import React from 'react';
import ReactDOM from 'react-dom';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import AppRouter from './Router';
import createStore from './store';
import fetchData from './fetch';
import auth from './auth';

const store = createStore();

auth(store);

runtime.register({
  scope: `https://${location.host}/`
})
  .catch(e => console.trace(e));

fetchData(store);

ReactDOM.render(<AppRouter data={store} />, document.getElementById('react-root'));
notice(store);