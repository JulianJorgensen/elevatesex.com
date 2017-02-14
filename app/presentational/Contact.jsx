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
    const meta = {
      title: 'Contact ElevateSex | ElevateSex.com'
    };

    return (
      <div className="page">
        <DocumentMeta {...meta} extend />
        <div className="marquee"><div className="marquee-image" style={{backgroundImage: 'url(/images/elevate-sand-written.jpg)'}}></div></div>
        <section className="section">
          <div className="container text-center">
            <h2><ContactMethod /></h2>
            <ul className="socialmedia-icons large">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = Contact;
