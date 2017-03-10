import React from 'react';
// import ReactMarkdown from 'react-markdown';
import DocumentMeta from 'react-document-meta';

import ReadMore from 'ReadMore';
import Newsletter from 'Newsletter';

class About extends React.Component{
  constructor(){
    super();
  }

  render() {
    const meta = {
      title: 'About Jocelyn & Julian | ElevateSex.com'
    };

    return (
      <div id="page-about">
        <DocumentMeta {...meta} extend />
        <div className="marquee"><div className="marquee-image" style={{backgroundImage: 'url(/images/about-julian-and-jocelyn-elevatesex.jpg)'}}></div></div>
        <section className="section">
          <div className="row">
            <div className="small-12 medium-6 columns">
              <div className="bio bio-first">
                <h2 className="bio-name">Jocelyn</h2>
                <p className="lead">In traditional Chinese families, sex was more of an obligation to reproducing children than to experience pleasure or connectedness with your lover. Nevertheless transform one's life. I was born into these beliefs, even though I grew up in Canadian culture, and it set me up for years of confusion in my sex and love life. Everything from early masturbation to regular drunk sex, manipulation of men to being walked all over, slutty sex to scratching the itch. Sex became a means to an end.</p>
                <ReadMore>
                  <p>Soon, I focused solely on myself. Diving deep into my spirituality and neglected my connection to my body. I was experiencing life from a very high vibrational state and that was how I came to know and feel unconditional love. I was in a deep Tantric love with nature and the cosmos before I knew what Tantra was. But I was missing out on the power of sex because I overlooked it's significance to my evolution.  And so I struggled with everyday life events in the material world. </p>
                  <p>It wasn't until Julian came into my life and I went to my first Tantra festival that I explored sex in a whole new way. I discovered new ways to experience sexual pleasure that could make me laugh hysterically in bliss, deeply sob as I released my past, go into a rhythmic trance where time stood still, where my body was so open that I flowed like a water fall. Each of these moments were directly transforming my life for the better. Thoughts, feelings or experiences that were holding me back were layers falling away through sex.</p>
                  <p>A whole new realm of possibilities opened up, and I instantly felt called to share this elevation of sex, so all women and men can live in freedom. It's our most hidden personal power, awaiting our activation.</p>
                  <p>I desire to share this journey with you. Leading by example and personal experience. I bring my talents with me as an Empowerment Coach for Women, a Shamballa Reiki Master, a Crystal Healing Practitioner, and Blogger/Vlogger to give you the tools to take sex, love and relationships to a whole new level. I am also a Yin Yoga Instructor, an Intuitive Masseuse, and a Artist - adding more depth to my message.</p>
                  <p>I invite you to journey with Julian and I to rise in love, through sex.</p>
                </ReadMore>
              </div>
            </div>
            <div className="small-12 medium-6 columns">
              <div className="bio">
                <h2 className="bio-name">Julian</h2>
                <p className="lead">Attracting women was never a problem. The problem was behind closed doors. I felt they were never fully satisfied sexually. The music choice was right. The timing was right. I was confident about my look and body. Everything was perfect. Except for one thing. It all boiled down to my magical 20 minutes. That’s about the length of time I could last in bed. Then I ejaculated and the show was over. Good night.</p>
                <ReadMore>
                  <p>This pattern contributed to my girlfriends’ lack of peacefulness (or whatever you want to call that juicy satisfied state).</p>
                  <p>In my early 20s I was fortunate to be introduced to the teachings of the Indian mystic OSHO. This profound turning point changed my life. It was the beginning of my interest in Tantra.</p>
                  <p>Opposite to many people, I was not very interested in sex in my teenage years and early 20s. I was busy learning about life and exploring many spiritual depths. Tantra challenged this belief and I slowly started realizing the vast potential there was in epic sex.</p>
                  <p>Despite many spiritual revelations, I was still a *quickie* in bed. The magical 20 minutes was now more magical, but short nonetheless. I tried everything from Yoga, standing on my head, pranayama (breath work), Maca, to weight lifting and beyond. Nothing seemed to truly work.</p>
                  <p>In my mid 20s I was introduced to the teachings of David Deida. His student Satyen became my mentor and that was another big turning point. Unlike my past experience with Tantra, this had a lot more of a masculine quality. It was a 2-piece puzzle coming together. Feminine and Masculine. I become soft yet penetrating.</p>
                  <p>Now, years later I fell in love with Jocelyn. It has been the most transforming experience of my life. We are psychically connected, emotionally connected, spiritually connected AND we have epic sex! We often have sex that lasts many hours. It’s filled with moments of soft heart openings as well as deep ravishment and ecstatic energy movements.</p>
                  <p>Outside of the tantra realm I earn a living by creating Web Apps and User Experiences. I’ve also designed a modular sofa, and founded a startup. I’ve had lots of failures, and learned lots from all of them. It’s been challenging at times, but looking back has been worth every single moment.</p>
                  <p>I’m also interested in Artificial Intelligence. My next personal project will be a spiritual growth AI based on a questionnaire.</p>
                  <p>With love and sincerity,<br />
                  Julian</p>
                  <small>I'm open to collaborations if it serves a higher purpose. For more info visit my website: <a href='http://www.JulianJorgensen.com' target='new'>JulianJorgensen.com</a></small>
                </ReadMore>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = About;
