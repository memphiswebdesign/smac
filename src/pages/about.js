import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

/* eslint-disable */
export default () => {
    return (
        <Layout>

            <Breadcrumb list={[ {name: 'home', href: '/'}, {name: 'about', href:'/about'} ]} />
            
            <section className="ds s-py-60 s-py-md-90 s-overlay mobile-overlay about-section">
                <div className="container">
                    <div className="row d-flex justify-content-end">
                        <div className="divider-70 d-none d-xl-block"></div>
                        <div className="col-md-12 col-xl-6 ">
                            <h3 className="special-heading text-lg-left text-center">about <span
                                className="color-main">fight</span> school</h3>
                            <div className="divider-40 d-none d-xl-block"></div>
                            <p className="excerpt text-lg-left text-center">Fight School has specialized in
                                martial arts since 1986 and has one of the most innovative programs in the
                                nation.</p>
                            <p className="text-lg-left text-center">
                                We teach martial arts because we love it — not because we want to make money on
                                you. Unlike other martial arts schools, we do not require you to sign long term
                                contracts.
                                You just pay one low monthly fee for your martial arts and self defense classes
                                at the beginning of each month. Many martial arts...
                                <a className="about-link" href="about.html">
                                    read more <i className="fa fa-level-down" aria-hidden="true"></i>
                                </a>
                            </p>

                            <div className="signature">
                                <div className="signature__left">
                                    <h5>Aiden Richards</h5>
                                    <span>DIRECTOR / INSTRUCTOR</span>
                                </div>
                                <div className="signature__right">
                                    <img src="images/signature.png" alt="signature"/>
                                </div>
                            </div>
                        </div>
                        <div className="divider-60 d-none d-xl-block"></div>
                    </div>
                </div>
            </section>
            <section className="ds ms s-py-60 s-py-md-90 s-overlay team-section">
                <div className="container">
                    <div className="row">
                        <div className="divider-70 d-none d-xl-block"></div>
                        <div className="col-12">
                            <h3 className="special-heading text-center">OUR INSTRUCTORS</h3>
                            <div className="divider-60 d-none d-xl-block"></div>
                            <div className="divider-40 hidden-above-md"></div>
                            <div className="owl-carousel" data-loop="true" data-margin="30" data-nav="true"
                                 data-dots="true" data-center="false" data-items="1" data-autoplay="true"
                                 data-responsive-xs="1" data-responsive-sm="2" data-responsive-md="3"
                                 data-responsive-lg="3">
                                <div className="vertical-item box-shadow content-padding text-center">
                                    <div className="item-media">
                                        <img src="images/team/01.jpg" alt=""/>
                                        <div className="media-links">
                                            <a className="abs-link" title="" href="team-single.html"></a>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5>
                                            <a href="team-single.html">Randall Schwartz</a>
                                        </h5>

                                        <p className="small-text color-main">
                                            KIDS INSTRUCTOR
                                        </p>
                                        <p className="social-icons">

                                            <a href="#" className="fa fa-facebook" title="facebook"></a>
                                            <a href="#" className="fa fa-twitter" title="twitter"></a>
                                            <a href="#" className="fa fa-google-plus" title="google"></a>

                                        </p>

                                    </div>
                                </div>
                                <div className="vertical-item box-shadow content-padding text-center">
                                    <div className="item-media">
                                        <img src="images/team/02.jpg" alt=""/>
                                        <div className="media-links">
                                            <a className="abs-link" title="" href="team-single.html"></a>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5>
                                            <a href="team-single.html">Randall Schwartz</a>
                                        </h5>

                                        <p className="small-text color-main">
                                            KIDS INSTRUCTOR
                                        </p>
                                        <p className="social-icons">

                                            <a href="#" className="fa fa-facebook" title="facebook"></a>
                                            <a href="#" className="fa fa-twitter" title="twitter"></a>
                                            <a href="#" className="fa fa-google-plus" title="google"></a>

                                        </p>

                                    </div>
                                </div>
                                <div className="vertical-item box-shadow content-padding text-center">
                                    <div className="item-media">
                                        <img src="images/team/03.jpg" alt=""/>
                                        <div className="media-links">
                                            <a className="abs-link" title="" href="team-single.html"></a>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5>
                                            <a href="team-single.html">Randall Schwartz</a>
                                        </h5>

                                        <p className="small-text color-main">
                                            KIDS INSTRUCTOR
                                        </p>
                                        <p className="social-icons">

                                            <a href="#" className="fa fa-facebook" title="facebook"></a>
                                            <a href="#" className="fa fa-twitter" title="twitter"></a>
                                            <a href="#" className="fa fa-google-plus" title="google"></a>

                                        </p>

                                    </div>
                                </div>
                                <div className="vertical-item box-shadow content-padding text-center">
                                    <div className="item-media">
                                        <img src="images/team/01.jpg" alt=""/>
                                        <div className="media-links">
                                            <a className="abs-link" title="" href="team-single.html"></a>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5>
                                            <a href="team-single.html">Randall Schwartz</a>
                                        </h5>

                                        <p className="small-text color-main">
                                            KIDS INSTRUCTOR
                                        </p>
                                        <p className="social-icons">

                                            <a href="#" className="fa fa-facebook" title="facebook"></a>
                                            <a href="#" className="fa fa-twitter" title="twitter"></a>
                                            <a href="#" className="fa fa-google-plus" title="google"></a>

                                        </p>

                                    </div>
                                </div>
                                <div className="vertical-item box-shadow content-padding text-center">
                                    <div className="item-media">
                                        <img src="images/team/02.jpg" alt=""/>
                                        <div className="media-links">
                                            <a className="abs-link" title="" href="team-single.html"></a>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5>
                                            <a href="team-single.html">Randall Schwartz</a>
                                        </h5>

                                        <p className="small-text color-main">
                                            KIDS INSTRUCTOR
                                        </p>
                                        <p className="social-icons">

                                            <a href="#" className="fa fa-facebook" title="facebook"></a>
                                            <a href="#" className="fa fa-twitter" title="twitter"></a>
                                            <a href="#" className="fa fa-google-plus" title="google"></a>

                                        </p>

                                    </div>
                                </div>
                                <div className="vertical-item box-shadow content-padding text-center">
                                    <div className="item-media">
                                        <img src="images/team/03.jpg" alt=""/>
                                        <div className="media-links">
                                            <a className="abs-link" title="" href="team-single.html"></a>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5>
                                            <a href="team-single.html">Randall Schwartz</a>
                                        </h5>

                                        <p className="small-text color-main">
                                            KIDS INSTRUCTOR
                                        </p>
                                        <p className="social-icons">

                                            <a href="#" className="fa fa-facebook" title="facebook"></a>
                                            <a href="#" className="fa fa-twitter" title="twitter"></a>
                                            <a href="#" className="fa fa-google-plus" title="google"></a>

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider-70 d-none d-xl-block"></div>
                    </div>
                </div>
            </section>
            <section className="ds s-py-60 s-py-md-90 testimonials-section">
                <div className="container">
                    <div className="row">
                        <div className="divider-70 d-none d-xl-block"></div>
                        <div className="col-12">
                            <h3 className="special-heading text-center">what clients say</h3>
                            <div className="divider-60 d-none d-xl-block"></div>
                            <div className="owl-carousel" data-loop="false" data-margin="30" data-nav="true"
                                 data-dots="true" data-center="false" data-items="1" data-autoplay="false"
                                 data-responsive-xs="1" data-responsive-sm="1" data-responsive-md="1"
                                 data-responsive-lg="1">
                                <div
                                    className="vertical-item testimonial-item box-shadow content-padding text-center">
                                    <blockquote className="quote-item">
                                        <div className="quote-image">
                                            <img src="images/team/testimonials_01.jpg" alt=""/>
                                        </div>
                                        <h5>Clifford Carter</h5>
                                        <p className="small-text color-main">
                                            VISITORS / BUSINESSMAN
                                        </p>
                                        <p>
                                            Pork belly shankle brisket pig swine sausage landjaeger tri-tip
                                            drumstick kielbasa burgdoggen pork chop prosciutto rump ground
                                            round. Andouille ribeye chicken swine. Biltong rump venison.
                                        </p>
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                    </blockquote>
                                </div>
                                <div
                                    className="vertical-item testimonial-item box-shadow content-padding text-center">
                                    <blockquote className="quote-item">
                                        <div className="quote-image">
                                            <img src="images/team/testimonials_04.jpg" alt=""/>
                                        </div>
                                        <h5>Clifford Carter</h5>
                                        <p className="small-text color-main">
                                            VISITORS / BUSINESSMAN
                                        </p>
                                        <p>
                                            Pork belly shankle brisket pig swine sausage landjaeger tri-tip
                                            drumstick kielbasa burgdoggen pork chop prosciutto rump ground
                                            round. Andouille ribeye chicken swine. Biltong rump venison.
                                        </p>
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                    </blockquote>
                                </div>
                                <div
                                    className="vertical-item testimonial-item box-shadow content-padding text-center">
                                    <blockquote className="quote-item">
                                        <div className="quote-image">
                                            <img src="images/team/testimonials_02.jpg" alt=""/>
                                        </div>
                                        <h5>Clifford Carter</h5>
                                        <p className="small-text color-main">
                                            VISITORS / BUSINESSMAN
                                        </p>
                                        <p>
                                            Pork belly shankle brisket pig swine sausage landjaeger tri-tip
                                            drumstick kielbasa burgdoggen pork chop prosciutto rump ground
                                            round. Andouille ribeye chicken swine. Biltong rump venison.
                                        </p>
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                    </blockquote>
                                </div>
                                <div
                                    className="vertical-item testimonial-item box-shadow content-padding text-center">
                                    <blockquote className="quote-item">
                                        <div className="quote-image">
                                            <img src="images/team/testimonials_03.jpg" alt=""/>
                                        </div>
                                        <h5>Clifford Carter</h5>
                                        <p className="small-text color-main">
                                            VISITORS / BUSINESSMAN
                                        </p>
                                        <p>
                                            Pork belly shankle brisket pig swine sausage landjaeger tri-tip
                                            drumstick kielbasa burgdoggen pork chop prosciutto rump ground
                                            round. Andouille ribeye chicken swine. Biltong rump venison.
                                        </p>
                                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
}
