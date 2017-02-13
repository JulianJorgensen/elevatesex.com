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

    if(window.md.mobile() || video.loadingVideo || video.playVideo){
      let windowWidth = window.innerWidth;
      let playerWidth = windowWidth - 60;
      let playerHeight = playerWidth / 1.778;

      let playerOpts = {
        width: playerWidth,
        height: playerHeight,
        playerVars: {
          color: 'red',
          showinfo: 0,
          modestbranding: 1,
          origin: 'https://www.elevatesex.com'
        }
      }

      return (
        <div id="player-wrapper" className={`${video.playVideo || window.md.mobile() ? '' : 'hide'}`}>
          <YouTube
            id="player"
            videoId="xBV5j-Bg77A"
            opts={playerOpts}
            onReady={(event)=>{
              if (!window.md.mobile()) {
                // access to player in all event handlers via event.target
                let player = event.target;
                player.playVideo();
                dispatch(actions.createPlayer(player));
                dispatch(actions.toggleNavIcon());
                dispatch(actions.hideNewsletter());
              }
            }}
            onPlay={(event)=>{
              if (!window.md.mobile()) {
                dispatch(actions.playVideo());
              }
            }}
            onEnd={()=>{
              dispatch(actions.closeVideo());
            }}
            onStateChange={(newState)=>{
              // if (window.md.mobile()) {
              //   switch(newState.data){
              //     case 3:
              //       dispatch(actions.videoIsLoading(true));
              //       break;
              //     case -1:
              //     case 0:
              //     case 5:
              //       dispatch(actions.videoIsLoading(false));
              //       break;
              //     case 2:
              //       dispatch(actions.videoIsLoading(false));
              //       dispatch(actions.stopVideo());
              //       break;
              //     case 1:
              //       dispatch(actions.videoIsLoading(false));
              //       dispatch(actions.playVideo());
              //       break;
              //   }
              // }
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
