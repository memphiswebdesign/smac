import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

class MailchimpSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formClass: ''
    };
  }


  handleSubmit = event => {
    event.preventDefault();
    console.log('this.state.email', this.state.email);
    addToMailchimp(this.state.email)
        .then(data => {
          this.setState({ responseMsg: data.msg, formClass: data.result });
        });
  }

  setEmail = event => {
    const email = event.target.value;
    this.setState({ email, formClass: '' });
  }

  getFormStateIcon = () => {
    return this.state.formClass === 'error' ? 'exclamation' : 'check';
  }

  render(props) {
    return (
      <>
        <div className="col-md-6 col-lg-4 text-center animate" data-animation="fadeInUp">
          <div className="widget widget_mailchimp">

            <h3 className="widget-title">Newsletter</h3>

            <p>
              Subscribe to our Newsletter to be updated.
              <br/>
              We promise not to spam. 
            </p>

            <form className={`signup ${this.state.formClass}`} onSubmit={this.handleSubmit}>
              <label htmlFor="mailchimp_email">
                <span className="screen-reader-text">Subscribe:</span>
              </label>

              <i className={`form-state-icon fa fa-${this.getFormStateIcon()}`}></i>
              <input id="mailchimp_email" name="email" type="email" onChange={this.setEmail}
                     className="form-control mailchimp_email" placeholder="Email Address"/>

              <button type="submit" className="search-submit">
                <span className="screen-reader-text">Subscribe</span>
              </button>
              <div className={`response ${this.state.formClass}`}
                    dangerouslySetInnerHTML={{ __html:  this.state.responseMsg }}></div>
            </form>

          </div>
        </div>
      </>
    );
  }
}

export default MailchimpSignup;
