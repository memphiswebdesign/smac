import React from 'react';
import RecentPosts from './RecentPosts';

/* eslint-disable */
export default ({ data }) => (

    <footer
        className="page_footer ds s-parallax s-overlay s-pt-50 s-pb-10 s-pb-lg-30 s-py-lg-90 c-mb-20 c-mb-lg-0 c-gutter-60">
        <div className="container">
            <div className="row align-items-start justify-content-center">
                <div className="divider-90 d-none d-xl-block"></div>

                <div className="col-md-6 col-lg-4 text-center animate" data-animation="fadeInUp">

                    <RecentPosts data={ data }/>

                </div>

                <div className="col-md-6 col-lg-4 text-center animate" data-animation="fadeInUp">
                    <div className="widget widget_icons_list">
                        <a href="./" className="logo flex-column text-center">
                            <img src="images/logo.png" alt="logo"/>
                        </a>
                        <p>Fight School has specialized in martial arts since 1986 and has one of the most
                            innovative programs in the nation.</p>
                        <div className="widget widget_social_buttons">
                            <a href="https://www.facebook.com/" className="fa fa-facebook border-icon rounded-icon" title="facebook"></a>
                            <a href="https://twitter.com/" className="fa fa-twitter border-icon rounded-icon" title="twitter"></a>
                            <a href="https://www.google.com/" className="fa fa-google-plus border-icon rounded-icon" title="google"></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 text-center animate" data-animation="fadeInUp">
                    <div className="widget widget_mailchimp">

                        <h3 className="widget-title">Newsletter</h3>

                        <p>
                            Subscribe to our Newsletter to be updated.
                            <br/>
                            We promise not to spam.
                        </p>

                        <form className="signup" action="/">
                            <label htmlFor="mailchimp_email">
                                <span className="screen-reader-text">Subscribe:</span>
                            </label>

                            <input id="mailchimp_email" name="email" type="email"
                                   className="form-control mailchimp_email" placeholder="Email Address"/>

                            <button type="submit" className="search-submit">
                                <span className="screen-reader-text">Subscribe</span>
                            </button>
                            <div className="response"></div>
                        </form>

                    </div>
                </div>


                <div className="divider-70 d-none d-xl-block"></div>
            </div>
        </div>
    </footer>
);

