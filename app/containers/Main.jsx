import React from 'react';
import Header from 'Header';
import Footer from 'Footer';
// import contentAPI from 'contentAPI';
import DocumentMeta from 'react-document-meta';
import myfont from 'KefaFont';
import { StickyContainer, Sticky } from 'react-sticky';
import MobileDetect from 'mobile-detect';
import FacebookCta from 'FacebookCta';

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
    const defaultSiteName = 'ElevateSex';
    const defaultTitle = 'Elevate your life through sex | ElevateSex.com'
    const defaultDescription = 'Elevate the very essence of life - sex. Join Jocelyn and Julian on a tantric journey with powerful tips and insights.';
    const defaultImage = 'https://www.elevatesex.com/images/elevatesex-social.jpg';
    const meta = {
      title: defaultTitle,
      description: defaultDescription,
      image: 'https://www.elevatesex.com/images/elevatesex-social.jpg',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Sexuality, Tantra, Couples',
          'rating': 'mature',
          'author': 'Jocelyn Lee and Julian Jorgensen',
          'copyright': 'Jocelyn Lee and Julian Jorgensen 2017',
          'twitter:card': 'summary',
          'twitter:title': defaultTitle,
          'twitter:description': defaultDescription,
          'twitter:image': defaultImage
        },
        property: {
          'og:title': defaultTitle,
          'og:image': defaultImage,
          'og:site_name': defaultSiteName,
          'og:type': 'website',
          'fb:admins': '772429297, 508840548'
        }
      }
    };

    return (
      <StickyContainer className={`${window.md.mobile() ? 'is-mobile' : ''} ${window.md.mobile() == 'iPhone' ? 'is-iphone' : 'is-not-iphone'}`}>
        <DocumentMeta {...meta} />
        <Header />
        {this.props.children}
        <FacebookCta />
        <Footer />
      </StickyContainer>
    );
  }
}

module.exports = Main;
