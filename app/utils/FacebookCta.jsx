import React from 'react';
import FacebookProvider, {Like} from 'react-facebook';

class FacebookCta extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <FacebookProvider appID="211784975956002">
        <Like href="http://elevatesex.com" colorScheme="dark" layout="button" share />
      </FacebookProvider>
    )
  }
}

module.exports = FacebookCta;
