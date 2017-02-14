import React from 'react';
import DocumentMeta from 'react-document-meta';
import Newsletter from 'Newsletter';

class ForSingles extends React.Component{
  constructor(){
    super();
  }

  render() {
    const meta = {
      title: 'Secrets For Singles | ElevateSex.com'
    };

    return (
      <div>
        <DocumentMeta {...meta} extend />
        <div className="marquee"><div className="marquee-image" style={{backgroundImage: 'url(/images/elevatesex-singles.jpg)', backgroundPosition: 'top center'}}></div></div>
        <section className="section">
          <div className="row">
            <div className="small-12 medium-6 columns">
              <p className="lead font-red"><em>Are you the nice guy that keeps getting told to “man up?” Are you the strong independent woman that is wondering when there’ll be a man that can “handle you?” Maybe you’re worried you’ll be alone forever?</em></p>
              <p>We feel you - we’ve been there. But, let us tell you - epic conscious love and sex is out there. But it’s not a destination. It’s an exploration, that begins with the question of: How much love you have for yourself and how authentic you are being in every moment. </p>
              <p>Scary isn’t it? Well, it doesn’t have to be. You’ve got the J team here to help you, both feminine and masculine perspectives. We’ll share choices we made that brought us together with you so you have a roadmap for your own journey.</p>
            </div>
            <div className="small-12 medium-6 columns">
              <p>We'll hold space for you to take those steps forward with others just like you. Connect you with communities where you can experience being your full heart-open authentic self without any judgement. </p>
              <p>Women, we want you to stand up as the queen you are and have men worship and honour your body, mind, heart and spirit. </p>
              <p>Men, we want you to have a king’s commanding presence where women want to open their body, mind, heart and spirit with you. </p>
              <p>This epic love we share didn’t just get handed to us on a silver platter. We acquired a lot of experience, techniques and tools to create this relationship. And you’ll have access to it all. Join our mailing list and get all the goods delivered right to you, today. </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = ForSingles;
