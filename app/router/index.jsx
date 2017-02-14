import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
let {connect} = require('react-redux');
let actions = require('actions');
let store = require('configureStore').configure();

import DocumentMeta from 'react-document-meta';
import Main from 'Main';
import Index from 'Index';
import About from 'About';
import ForSingles from 'ForSingles';
import ForCouples from 'ForCouples';
import Contact from 'Contact';
import NotFound from 'NotFound';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-6241825-9'); // initialize Google Analytics

function logPageView(location) {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
}

browserHistory.listen((location) => {
  logPageView(location);
  window.scrollTo(0, 0);
});

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="for-singles" component={ForSingles}/>
      <Route path="for-couples" component={ForCouples}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
