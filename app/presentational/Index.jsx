import React from 'react';
import {Link, IndexLink} from 'react-router';
// import ReactMarkdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';

import Newsletter from 'Newsletter';
import VideoPlayer from 'VideoPlayer';
import VideoPlayButton from 'VideoPlayButton';
import ContactMethod from 'ContactMethod';

class Index extends React.Component{
  constructor(){
    super();
  }

  render() {
    let renderBgVideo = () => {
      if (!window.md.mobile()) {
        return (
          <div>
            <video className="landing-video" autoPlay loop muted playsInline poster="/images/landing-bg.jpg">
              <source src="/videos/elevatesex-bg-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )
      }else{
        return (
          <div id="landing-section-bg"></div>
        )
      }
    }

    return (
      <div>
        <section className="section-landing">
          {/* newsletter signup */}
          <div id="section-landing-content">
            <h2>Watch our intimate journey of elevating sex.</h2>
            <h3><i>for conscious couples and singles</i></h3>
            <VideoPlayButton id="player-watch" />
          </div>

          {/* landing video */}
          {renderBgVideo()}

          {/* Video Player */}
          <VideoPlayer />

          {/* Newsletter */}
          <Newsletter />
        </section>

        <section className="section">
          <div className="container">
            <p className="lead">Whether you’re single or in a relationship, we need and want sex, passion and love. Your sex life is the playground for you and your partner to learn with each other, and to grow together. We are who we are in relation to one other.</p>
            <p className="lead">We are choosing to share with you the intimate journey of our tantric relationship. Where it’s all about elevating sex. That means improving your quality, depth and purpose of sex.</p>
            <p className="lead">Sex is the source of life - so in case you were wondering - it definitely affects your life. And it’s an untapped energy readily available to improve your relationships. It’s an experience you can use to live confidently, authentically and blissfully with yourself and those you love. Taking the power of sex from reproduction to transformation.</p>
            <div className="row margin-top-large">
              <div className="small-12 medium-6 text-center large-text-left">
                <Link to="/for-singles" className="button large secondary">Secrets for Singles</Link>
              </div>
              <div className="small-12 medium-6 text-center large-text-right">
                <Link to="/for-couples" className="button large secondary">Secrets for Couples</Link>
              </div>
            </div>
            {/* <h2><ContactMethod /></h2> */}
          </div>
        </section>
      </div>
    )
  }
}

module.exports = Index;
