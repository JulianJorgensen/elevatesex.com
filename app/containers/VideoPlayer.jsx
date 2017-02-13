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
      return (
        <div id="player-wrapper" className={video.playVideo || window.mobileAndTabletcheck() ? '' : 'hide'}>
          <YouTube
            id="player"
            className={video.playVideo ? 'is-playing' : 'not-playing'}
            videoId="xBV5j-Bg77A"
            opts={{
              playerVars: {
                color: 'red',
                showinfo: 0,
                modestbranding: 1,
                origin: 'https://www.elevatesex.com'
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
                  case 2:
                  case 5:
                    dispatch(actions.videoIsLoading(false));
                    dispatch(actions.stopVideo());
                    break;
                  case 1:
                    dispatch(actions.videoIsLoading(false));
                    dispatch(actions.playVideo());
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
