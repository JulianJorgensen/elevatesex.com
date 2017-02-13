import React from 'react';
import Header from 'Header';
// import contentAPI from 'contentAPI';
import DocumentMeta from 'react-document-meta';
import myfont from 'KefaFont';
import { StickyContainer, Sticky } from 'react-sticky';
import MobileDetect from 'mobile-detect';

class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      content: ''
    };
  }

  componentWillMount() {
    // mobile detection singleton
    window.md = new MobileDetect(window.navigator.userAgent);
  }

  render() {
    const meta = {
      title: 'Elevate your life through sex | ElevateSex.com',
      description: 'Elevate the very essence of life - sex. Join Jocelyn and Julian on a tantric journey with powerful tips and insights.',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Sexuality, Tantra, Couples'
        }
      },
      auto: {
        ograph: true
      }
    };

    return (
      <StickyContainer className={`${window.md.mobile() ? 'is-mobile' : ''} ${window.md.mobile() == 'iPhone' ? 'is-iphone' : 'is-not-iphone'}`}>
        <DocumentMeta {...meta} />
        <Header/>
        {this.props.children}
      </StickyContainer>
    );
  }
}

module.exports = Main;
