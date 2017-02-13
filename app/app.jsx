import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import actions from 'actions';
let store = require('configureStore').configure();
import router from 'app/router/';
import MobileDetect from 'mobile-detect';

// subscribe to the redux store
store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);

  // TodoAPI.setTodos(state.todos);
});

// mobile detection singleton
window.md = new MobileDetect(window.navigator.userAgent);

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
