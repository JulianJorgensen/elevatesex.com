import React from 'react';
// import ReactMarkdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';

import Newsletter from 'Newsletter';

class About extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <div className="marquee"><div className="marquee-image" style={{backgroundImage: 'url(/images/landing-bg.jpg)'}}></div></div>
        <section className="section">
          <div className="row">
            <div className="small-12 medium-6 columns">
              <h2>Jocelyn</h2>
              <p className="lead">Sex is the source of life. When the source is elevated your life awakens. Through this activation we became empowered, unified and purposeful. Feeling a deeper authenticity in our relationship(s). Confidence and love radiated through our bodies. </p>
              <p className="lead">An undeniable energy kept pointing us towards a deeper sense of who we truly are. For lack of better words, it was a spiritual orgasm. This magic continues to be alive between us.</p>
            </div>
            <div className="small-12 medium-6 columns">
              <h2>Julian</h2>
              <p className="lead">Inspired by tantric communities, we feel called to share and create these experiences with you; to Elevate Sex.</p>
              <p className="lead">Welcome to the community.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = About;
