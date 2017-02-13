import React from 'react';
let {connect} = require('react-redux');
let actions = require('actions');

class VideoPlayButton extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {dispatch, video, id} = this.props;

    if (!window.md.mobile()) {
      return (
        <div id={id} className="button large" onClick={()=>{
            dispatch(actions.videoIsLoading(true));
          }}>
          <span className="watch">watch</span> <i className={video.loadingVideo ? 'fa fa-spinner fa-pulse fa-fw' : 'fa fa-play-circle'}></i>
        </div>
      )
    }else{
      return (<div></div>)
    }
  }
}

export default connect(
  (state) => {
    return {
      video: state.video
    }
  }
)(VideoPlayButton);
