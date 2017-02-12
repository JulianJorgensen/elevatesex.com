import React from 'react';
// import ReactMarkdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';

import Newsletter from 'Newsletter';
import ContactMethod from 'ContactMethod';

class Contact extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <div className="marquee"><div className="marquee-image" style={{backgroundImage: 'url(/images/landing-bg.jpg)'}}></div></div>
        <section className="section">
          <h1>Contact</h1>
          <div className="container">
            <ContactMethod />
          </div>
        </section>
      </div>
    )
  }
}

module.exports = Contact;
