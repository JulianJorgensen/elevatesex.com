import * as redux from 'redux';
import thunk from 'redux-thunk';

import {navReducer, videoReducer, newsletterReducer} from 'reducers';

export let configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    nav: navReducer,
    video: videoReducer,
    newsletter: newsletterReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
