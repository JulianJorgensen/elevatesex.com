export var navReducer = (state = {showClose: false, showNav: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV_ICON':
      return {
        ...state,
        showClose: !state.showClose,
        showNav: state.showNav
      };
    case 'TOGGLE_NAV':
      return {
        ...state,
        showClose: !state.showClose,
        showNav: !state.showNav
      };
    case 'CLOSE_NAV':
      return {
        ...state,
        showClose: false,
        showNav: false
      };
    default:
      return state;
  }
};

export var videoReducer = (state = {playVideo: false, loadingVideo: false}, action) => {
  switch (action.type) {
    case 'CREATE_PLAYER':
      return {
        ...state,
        player: action.player
      };
    case 'TOGGLE_VIDEO_IS_LOADING':
      return {
        ...state,
        loadingVideo: action.isLoading
      };
    case 'PLAY_VIDEO':
      return {
        ...state,
        playVideo: true,
        loadingVideo: false
      };
    case 'STOP_VIDEO':
      return {
        ...state,
        playVideo: false,
        loadingVideo: false
      };
    default:
      return state;
  }
};


export var newsletterReducer = (state = {show: true, errors: false, subscribed: false, showInModal: false, showConfirmation: false}, action) => {
  switch (action.type) {
    case 'HIDE_NEWSLETTER':
      return {
        ...state,
        show: false
      };
    case 'SHOW_NEWSLETTER':
      return {
        ...state,
        show: true
      };
    case 'SHOW_CONFIRMATION':
      return {
        ...state,
        showConfirmation: true
      };
    case 'HIDE_CONFIRMATION':
      return {
        ...state,
        showConfirmation: false
      };
    case 'NEWSLETTER_SUBSCRIBED':
      return {
        ...state,
        subscribed: true
      };
    case 'SHOW_NEWSLETTER_IN_MODAL':
      return {
        ...state,
        showInModal: action.show
      };
    default:
      return state;
  }
};
