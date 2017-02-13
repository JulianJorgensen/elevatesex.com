export var routeLocationDidUpdate = (router) => {
  return {
    type: 'UPDATE_ROUTER',
    router
  };
};

export var toggleNavIcon = () => {
  return {
    type: 'TOGGLE_NAV_ICON'
  };
};

export var toggleNav = () => {
  return {
    type: 'TOGGLE_NAV'
  };
};

export var closeNav = () => {
  return {
    type: 'CLOSE_NAV'
  };
};

export var createPlayer = (player) => {
  return {
    type: 'CREATE_PLAYER',
    player
  };
};

export var videoIsLoading = (isLoading) => {
  return {
    type: 'TOGGLE_VIDEO_IS_LOADING',
    isLoading
  };
};

export var playVideo = () => {
  return {
    type: 'PLAY_VIDEO'
  };
};

export var stopVideo = (player) => {
  if(player) {
    player.stopVideo();
  }
  return {
    type: 'STOP_VIDEO'
  };
};

export var closeVideo = () => {
  return (dispatch, getState) => {
    dispatch(toggleNavIcon());
    dispatch(stopVideo(getState().video.player));
    dispatch(showNewsletterInModal(true));
    dispatch(showNewsletter());
  }
}

export var hideNewsletter = () => {
  return {
    type: 'HIDE_NEWSLETTER'
  };
};

export var newsletterSubscribe = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'NEWSLETTER_SUBSCRIBED' });
    dispatch({ type: 'HIDE_NEWSLETTER' });
  }
};

export var showNewsletter = () => {
  return (dispatch, getState) => {
    console.log('trying to show newsletter: ', !getState().newsletter.subscribed);
    if (!getState().newsletter.subscribed) {
      dispatch({ type: 'SHOW_NEWSLETTER' });
    }
  }
};

export var showNewsletterInModal = (show) => {
  console.log('showing newsletter in modal');
  return (dispatch, getState) => {
    dispatch({ type: 'SHOW_NEWSLETTER_IN_MODAL', show });
  }
};

export var showConfirmation = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'SHOW_CONFIRMATION' });
  }
};

export var hideConfirmation = () => {
  return {
    type: 'HIDE_CONFIRMATION'
  };
};
