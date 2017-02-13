import React from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
let { connect } = require('react-redux');
let actions = require('actions');
import { StickyContainer, Sticky } from 'react-sticky';

class Header extends React.Component {
  constructor(){
    super();

    this.state = {
      scrollState: false
    }
  }

  componentWillMount() {
    browserHistory.listen((location) => {
      this.props.dispatch(actions.closeNav());
      // let state = store.getState();
      // console.log("state:", state);
    });
  }

  render() {
    let {dispatch, nav, video} = this.props;

    return (
      <Sticky id="site-header-wrapper" stickyClassName="header-small" topOffset={20}>
        <header id="site-header" className={nav.showNav ? 'show-site-nav' : ''}>

          <div className="site-logo">
            <IndexLink to="/" activeClassName="active-link" className={video.playVideo ? 'hide' : ''}><div><span className="font-white">Elevate</span><span className="font-red">Sex</span></div></IndexLink>
          </div>
          <nav className="site-nav">
            <div className={`site-nav-icon ${nav.showClose ? 'open' : ''}`} onClick={this.toggleNav.bind(this)}>
              <div className="animated-bars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <i className={`fa ${nav.showClose ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
          </nav>

          <nav id="main-nav">
            <ul>
              <li><IndexLink to="/" activeClassName="active-link">Home</IndexLink></li>
              <li><Link to="/about" activeClassName="active-link">About</Link></li>
              <li><Link to="/contact" activeClassName="active-link">Contact</Link></li>
            </ul>
          </nav>
        </header>
      </Sticky>
    )
  }

  toggleNav(){
    let {dispatch, nav, video} = this.props;
    if(nav.showClose && !nav.showNav){
      // the nav is in "video" mode
      dispatch(actions.closeVideo());
    }else{
      console.log('toggle nav icon and nav');
      // toggle both nav icon and the nav
      dispatch(actions.toggleNav());
    }
  }
}

export default connect(
  (state) => {
    return {
      nav: state.nav,
      video: state.video
    }
  }
)(Header);
