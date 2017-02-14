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
              <div className="bio">
                <h2 className="bio-name">Jocelyn</h2>
                <p className="lead">In traditional Chinese families, sex was more of an obligation to reproducing children than to experience pleasure or connectedness with your lover. Nevertheless transform one's life. Jocelyn was born into these beliefs, even though she grew up in Canadian culture, and it set her up for years of confusion in her sex and love life. Everything from early masturbation to regular drunk sex, manipulation of men to being walked all over, slutty sex to scratching the itch. Sex became a means to an end.</p>
                <ReadMore>
                  <p>It wasn't until Julian came into Jocelyn's life and she went to her first tantra festival that she explored sex in a whole new way. She discovered new ways to experience sexual pleasure that could make her laugh hysterically in bliss, deeply sob as she released her past, go into a rhythmic trance where time stood still, where her body was so open that she flowed like a water fall. Each of these moments were directly transforming her life for the better. Thoughts, feelings or experiences that were holding her back were layers falling away through sex.</p>
                  <p>A whole new realm of possibilities opened up, and she instantly felt called to share this elevation of sex, so all women and men can live in freedom. It's our most hidden personal power, awaiting our activation.</p>
                  <p>Jocelyn desires to share this journey with you. Leading by example and personal experience. She brings her talents with her as an Empowerment Coach for Women, a Shamballa Reiki Master, a Crystal Healing Practitioner, and Blogger/Vlogger to give you the tools to take sex, love and relationships to a whole new level. She is also a Yin Yoga Instructor, an Intuitive Masseuse, and a Artist - adding more depth to her message.</p>
                  <p>Jocelyn invites you to journey with her and Julian to rise in love, through sex.</p>
                </ReadMore>
              </div>
            </div>
            <div className="small-12 medium-6 columns">
              <div className="bio">
                <h2 className="bio-name">Julian</h2>
                <p className="lead">Sed quis egestas ex. Aenean in lobortis justo, sed porta ipsum. Donec in eros quis risus consectetur vestibulum nec at justo. Mauris bibendum congue aliquet. Fusce tincidunt est ut tincidunt finibus. Proin dignissim elit maximus, lobortis nulla vitae, cursus velit. Aliquam gravida imperdiet sapien, rhoncus rutrum quam pretium et.</p>
                <ReadMore>
                  <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
                  <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
                  <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
                  <p>Quisque et eleifend sem. Duis convallis metus sit amet eros dignissim, at dictum mi gravida. Aliquam id cursus purus.</p>
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
