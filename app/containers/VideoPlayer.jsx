import React from 'react';
let {connect} = require('react-redux');
let actions = require('actions');

import YouTube  from 'react-youtube';

class VideoPlayer extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {dispatch, video} = this.props;

    if(window.mobileAndTabletcheck() || video.loadingVideo || video.playVideo){
      console.log('rendering video');
      console.log('is mobile?', window.mobileAndTabletcheck());
      console.log('loading video?', video.loadingVideo);
      console.log('play video?', video.playVideo);
      return (
        <div id="player-wrapper" className={video.playVideo || window.mobileAndTabletcheck() ? '' : 'hide'}>
          <YouTube
            id="player"
            videoId="xBV5j-Bg77A"
            opts={{
              playerVars: {
                autohide: 0,
                showinfo: 0
              }
            }}
            onReady={(event)=>{
              if (!window.mobileAndTabletcheck()) {
                // access to player in all event handlers via event.target
                let player = event.target;
                player.playVideo();
                dispatch(actions.createPlayer(player));
                dispatch(actions.toggleNavIcon());
                dispatch(actions.hideNewsletter());
              }
            }}
            onPlay={(event)=>{
              if (!window.mobileAndTabletcheck()) {
                dispatch(actions.playVideo());
              }
            }}
            onEnd={()=>{
              dispatch(actions.closeVideo());
            }}
            onStateChange={(newState)=>{
              if (window.mobileAndTabletcheck()) {
                switch(newState.data){
                  case 3:
                    dispatch(actions.videoIsLoading(true));
                    break;
                  case -1:
                  case 0:
                  case 1:
                  case 2:
                  case 5:
                    dispatch(actions.videoIsLoading(false));
                    break;
                }
              }
            }}
          />
        </div>
      )
    }else{
      return (
        <div></div>
      )
    }
  }
}

export default connect(
  (state) => {
    return {
      video: state.video
    }
  }
)(VideoPlayer);
