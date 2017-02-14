import React from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
let {connect} = require('react-redux');
let actions = require('actions');

import Newsletter from 'Newsletter';

class Footer extends React.Component {
  constructor(){
    super();
  }

  render() {
    let {dispatch, nav, video} = this.props;

    return (
      <footer id="site-footer">
        <div className="container">
          <h2>Learn our secrets to great sex</h2>
          <Newsletter buttonClass="large expanded" />
        </div>
      </footer>
    )
  }
}

export default connect(
  (state) => {
    return {
      nav: state.nav,
      video: state.video
    }
  }
)(Footer);
