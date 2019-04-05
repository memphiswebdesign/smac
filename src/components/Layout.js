import React from "react"
import HeroSlider from '../templates/HeroSlider';
import MobileSearch from '../components/MobileSearch';
import Navbar from "../components/Navbar";

function renderHero(shouldRender) {
    if (shouldRender) {
        return <HeroSlider/>
    }
}

export default (props) => (
    <>
        <div className="modal" tabIndex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="widget widget_search">
                <form method="get" className="searchform search-form" action="/">
                    <div className="form-group">
                        <input type="text" value="" name="search" className="form-control" placeholder="Search keyword"
                               id="modal-search-input"/>
                    </div>
                    <button type="submit" className="btn">Search</button>
                </form>
            </div>
        </div>

        <div className="modal fade" tabIndex="-1" role="dialog" id="messages_modal">
            <div className="fw-messages-wrap ls p-normal">

            </div>
        </div>

        <div id="canvas">
            <div id="box_wrapper">

                <MobileSearch/>

                <div className="header_absolute">
                    <Navbar/>
                    { renderHero(props.renderHero) }
                </div>

                {/* Render all the children passed into the Layout component */}
                { props.children }

                <footer
                    className="page_footer ds s-parallax s-overlay s-pt-50 s-pb-10 s-pb-lg-30 s-py-lg-90 c-mb-20 c-mb-lg-0 c-gutter-60">
                    <div className="container">
                        <div className="row align-items-start justify-content-center">
                            <div className="divider-90 d-none d-xl-block"></div>

                            <div className="col-md-6 col-lg-4 text-center animate" data-animation="fadeInUp">

                                <div className="widget widget_recent_entries">

                                    <h3 className="widget-title">Recent Posts</h3>

                                    <ul>
                                        <li>
                                            <a href="blog-single-right.html">How I Lost The Secret Of My Dazzling
                                                Success For 20 Years</a>
                                            <span className="post-date">26 dec 2017</span>
                                        </li>
                                        <li>
                                            <a href="blog-single-right.html">Make It Your Destiny To Accomplish Great
                                                Things In Your Life</a>
                                            <span className="post-date">27 dec 2017</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="col-md-6 col-lg-4 text-center animate" data-animation="fadeInUp">
                                <div className="widget widget_icons_list">
                                    <a href="./" className="logo flex-column text-center">
                                        <img src="images/logo.png" alt="logo"/>
                                    </a>
                                    <p>Fight School has specialized in martial arts since 1986 and has one of the most
                                        innovative programs in the nation.</p>
                                    <div className="widget widget_social_buttons">
                                        <a href="https://www.facebook.com/"
                                           className="fa fa-facebook border-icon rounded-icon" title="facebook"></a>
                                        <a href="https://twitter.com/"
                                           className="fa fa-twitter border-icon rounded-icon" title="twitter"></a>
                                        <a href="https://www.google.com/"
                                           className="fa fa-google-plus border-icon rounded-icon" title="google"></a>
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

                <section className="page_copyright ds s-py-10 s-py-md-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="divider-20 d-none d-lg-block"></div>
                            <div className="col-md-12 text-center">
                                <p>&copy; Copyright <span className="copyright_year">2018</span> All Rights Reserved</p>
                            </div>
                            <div className="divider-20 d-none d-lg-block"></div>
                        </div>
                    </div>
                </section>

            </div>
        </div>

    </>
);

