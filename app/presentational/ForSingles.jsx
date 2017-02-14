import React from 'react';
import DocumentMeta from 'react-document-meta';
import Newsletter from 'Newsletter';

class ForSingles extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <div className="marquee"><div className="marquee-image" style={{backgroundImage: 'url(/images/about-julian-and-jocelyn-elevatesex.jpg)'}}></div></div>
        <section className="section">
          <div className="row">
            <div className="small-12 medium-6 columns">
              <p className="lead">Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
              <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
              <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
              <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
            </div>
            <div className="small-12 medium-6 columns">
              <p className="lead">Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
              <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
              <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
              <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = ForSingles;
