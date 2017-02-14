import React from 'react';
import $ from 'jquery';
import ReactModal from 'react-modal';
let { connect } = require('react-redux');
let actions = require('actions');

ReactModal.defaultStyles.overlay.backgroundColor = 'black';

class Newsletter extends React.Component{
  constructor(props){
    super(props);

    this.abide;
    this.state = {
      subscribeError: false
    }

    let email = null;
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseConfirmationModal = this.handleCloseConfirmationModal.bind(this);
  }

  handleCloseModal () {
    this.props.dispatch(actions.showNewsletterInModal(false));
  }

  handleCloseConfirmationModal () {
    this.props.dispatch(actions.hideConfirmation());
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.email.value.length > 0){
      var data = {
        EMAIL: this.email.value
      }

      $.ajax({
        type: 'POST',
        url: '//koichihealing.us8.list-manage.com/subscribe/post-json?u=c616a68c09aae3ea3e536552e&amp;id=7c8bb23449&c=?',
        data: data,
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8"
      })
      .done((data) => {
        if (data['result'] != "success") {
          // error
          console.log(data);
          this.setState({
            subscribeError: data['msg'].substring(4)
          });
        } else {
          // success
          this.props.dispatch(actions.newsletterSubscribe());
          this.props.dispatch(actions.hideNewsletter());
          this.props.dispatch(actions.showConfirmation());
          this.setState({
            subscribeError: false
          });
        }
      })
      .fail(function(jqXhr) {
        this.setState({
          subscribeError: 'An error occured. Please contact <a href="mailto: me@julianjorgensen.com">Julian</a> if the issue persists.'
        });
        console.log('failed to register', jqXhr);
      });
    }else{
      this.setState({
        subscribeError: "Please enter a valid email"
      });
    }
  }

  render() {
    let {dispatch, newsletter, buttonClass, buttonText, headline} = this.props;

    let renderHeadline = () => {
      return (<h2>{headline}</h2>)
    }

    let renderNewsletterForm = () => {
      if (newsletter.show) {
        if (newsletter.showInModal) {
          return (
            <ReactModal isOpen={true} closeTimeoutMS={200} className="ReactModal__Content" onRequestClose={this.handleCloseModal} contentLabel="test">
              <h3 className="modal-headline">Free valentines gift</h3>
              <ul>
                <li>Deepen your relationship(s)</li>
                <li>Expand your awareness</li>
                <li>Get tools to navigate relationship challenges</li>
                <li>Improve your love communication</li>
              </ul>
              <p><i>Enter your email now and<br />get our Pussy Meditation for free!</i></p>
              <form id="newsletter-signup-form" className="text-center" onSubmit={this.handleSubmit.bind(this)} noValidate>
                <input type="email" placeholder="Your Email" ref={(input) => { this.email = input; }} />
                <input type="submit" value={buttonText ? buttonText : 'I want secrets to great sex'} className="button large" />
                <p className="margin-top-medium margin-none"><a onClick={this.handleCloseModal}>No thanks, I don't want better sex</a></p>
              </form>

              <div id="newsletter-error" className={!this.state.subscribeError ? 'hide' : '' }>
                <small className="font-red">{this.state.subscribeError}</small>
              </div>

              <button className="close-modal-icon" onClick={this.handleCloseModal}><i className="fa fa-times" /></button>
            </ReactModal>
          )
        }else{
          return (
            <div>
              <form className="newsletter-signup-form" onSubmit={this.handleSubmit.bind(this)} noValidate>
                <input type="email" placeholder="Your Email" ref={(input) => { this.email = input; }} />
                <input type="submit" value={buttonText ? buttonText : 'I want secrets to great sex'} className={`button ${buttonClass ? buttonClass : ''}`} />
              </form>

              <div className={`newsletter-error ${!this.state.subscribeError ? 'hide' : '' }`}>
                <small className="font-red">{this.state.subscribeError}</small>
              </div>
            </div>
          )
        }
      }
    }
    return (
      <div className="newsletter">
        {headline ? renderHeadline() : ''}

        {/* newsletter signup form */}
        {renderNewsletterForm()}

        <ReactModal isOpen={newsletter.subscribed && newsletter.showConfirmation} closeTimeoutMS={200} className="ReactModal__Content" onRequestClose={this.handleCloseConfirmationModal} contentLabel="newsletter-confirmation">
          <h2 className="font-green">Thank you!</h2>
          <h4>To complete your subscription,<br />please click the link in the email we just sent you.</h4>
          <button className="button large success pull-right" onClick={this.handleCloseConfirmationModal}>Done</button>
        </ReactModal>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      newsletter: state.newsletter
    }
  }
)(Newsletter);
