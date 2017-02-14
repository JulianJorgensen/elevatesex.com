import React from 'react';
// import ReactMarkdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';
import ContactMethod from 'ContactMethod';

class NotFound extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div className="page">
        <div className="marquee"><div className="marquee-image" style={{backgroundImage: 'url(/images/elevate-sand-written.jpg)'}}></div></div>
        <section className="section">
          <div className="container text-center">
            <h1>This page was not found</h1>
            <p className="lead">You can email us at <ContactMethod /> if the issue persists</p>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = NotFound;
