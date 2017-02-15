import React from 'react';

class FacebookCta extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div className="fb-like" data-href="https://elevatesex.com" data-layout="button" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
    )
  }
}

module.exports = FacebookCta;
