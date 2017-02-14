import React from 'react';
import DocumentMeta from 'react-document-meta';
import Newsletter from 'Newsletter';

class ForCouples extends React.Component{
  constructor(){
    super();
  }

  render() {
    const meta = {
      title: 'Secrets For Couples | ElevateSex.com'
    };

    return (
      <div>
        <DocumentMeta {...meta} extend />
        <div className="marquee"><div className="marquee-image" style={{backgroundImage: 'url(/images/elevatesex-couples.jpg)'}}></div></div>
        <section className="section">
          <div className="row">
            <div className="small-12 medium-6 columns">
              <p className="lead font-red"><em>Happy couples, passionate couples, new couples, old couples. Unhappy couples, distant couples, inexperienced couples and seasoned couples. We welcome all of you.</em></p>
              <p>You can have a lot of experience by the years you spend with each other that only time can give. But you can also be in a relationship for years but not really know the person you’re with, or not feel comfortable being fully yourself. Or keep hitting the same problems over and over again despite the years together. Maybe you’re freshly coupled in intense passion but worried about making the same mistakes from past lovers in this one. </p>
              <p>What is the measure of a successful relationship? </p>
            </div>
            <div className="small-12 medium-6 columns">
              <p>We don’t have your answer. What we do have is our answer. One we actively create everyday with a commitment to a conscious unconditional love that is authentic, passionate and transformative. One where we can elevate ourselves and each other. One where our love can be celebrated by others. And most definitely one where we make mistakes and hurt one another from time-to-time. This is our tantric journey together and we wouldn’t have it any other way.</p>
              <p>Join us in this dedication to take your relationship to a whole new level. Receive our intimate, honest and transformative stories, perspectives and techniques delivered right to you - just type in your email below! </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = ForCouples;
