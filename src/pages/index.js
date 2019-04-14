// import "../../static/js/vendor/bootstrap.bundle.min.js";
import React, { Component } from "react"
import OwlCarousel from '../components/OwlCarousel';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import LatestNews from "../components/LatestNews";
import InfoBanner from "../components/InfoBanner";
import FaqAccordion from "../components/FaqAccordion";
import InstructorsBlock from "../components/InstructorsBlock";

/* eslint-disable */
class Index extends Component {

    render() {
        return (
            <Layout renderHero={true} >

                <InfoBanner color={"navy"} />

                {/* About Block */}
                <section className="ds s-py-60 s-py-md-90 s-overlay mobile-overlay about-section">
                    <div className="container">
                        <div className="row d-flex justify-content-end">
                            <div className="divider-70 d-none d-xl-block"></div>
                            <div className="col-md-12 col-xl-6 ">
                                <h3 className="special-heading text-lg-left text-center">about <span
                                    className="color-main">SMAC</span></h3>
                                <div className="divider-40 d-none d-xl-block"></div>
                                <p className="excerpt text-lg-left text-center">Fight School has specialized in martial
                                    arts since 1986 and has one of the most innovative programs in the nation.</p>
                                <p className="text-lg-left text-center">
                                    We teach martial arts because we love it — not because we want to make money on you.
                                    Unlike other martial arts schools, we do not require you to sign long term
                                    contracts.
                                    You just pay one low monthly fee for your martial arts and self defense classes at
                                    the beginning of each month. Many martial arts...
                                    <a className="about-link" href="about">
                                        read more <i className="fa fa-level-down" aria-hidden="true"></i>
                                    </a>
                                </p>

                                <div className="signature">
                                    <div className="signature__left">
                                        <h5>Jason Warren</h5>
                                        <span>FOUNDER / CHIEF INSTRUCTOR</span>
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

                {/* Programs (Classes) */}
                <section className="ds ms s-py-60 s-py-md-90 s-overlay program-section programs">
                    <div className="container">
                        <div className="row">
                            <div className="divider-70 d-none d-xl-block"></div>
                            <div className="col-12">
                                <h3 className="special-heading text-center">OUR Programs</h3>
                                <div className="divider-60 d-none d-xl-block"></div>
                                <div className="divider-40 hidden-above-md"></div>

                                <OwlCarousel/>

                            </div>
                            <div className="divider-40 d-none d-lg-block"></div>
                                <div className="col-md-12 text-center">
                                  <a className="btn btn-outline-maincolor" href="/programs">All Programs</a>
                                  <a className="btn btn-outline-maincolor" href="/schedule">Class Schedule</a>
                                </div>
                            <div className="divider-70 d-none d-lg-block"></div>
                        </div>
                    </div>
                </section>

                {/* What Clients Say */}
                <section className="ds s-py-60 s-py-md-90 testimonials-section">
                    <div className="container">
                        <div className="row">
                            <div className="divider-70 d-none d-xl-block"></div>
                            <div className="col-12">
                                <h3 className="special-heading text-center">what clients say</h3>
                                <div className="divider-60 d-none d-xl-block"></div>
                                <div className="owl-carousel" data-loop="true" data-margin="30" data-nav="true"
                                     data-dots="true" data-center="false" data-items="1" data-autoplay="false"
                                     data-responsive-xs="1" data-responsive-sm="1" data-responsive-md="1"
                                     data-responsive-lg="1">
                                    <div
                                        className="vertical-item testimonial-item box-shadow content-padding text-center">
                                        <blockquote className="quote-item">
                                            <div className="quote-image">
                                                <img src="images/team/puckett-family.jpg" alt=""/>
                                            </div>
                                            <h5>Danielle Puckett</h5>
                                            <p className="small-text color-main">
                                                Proud Parents
                                            </p>
                                            <p>
                                                Our family has not only grown physically stronger but also mentally stronger at Success Martial Arts Center. Each one of us has learned to be more focused and to push forward even when we didn’t feel like we could. Most importantly we have become closer as a family by learning taekwondo together. As a bonus we have gained an amazing martial arts family at SMAC. Our instructors and fellow students have become a wonderful support system for us. And we are so thankful for our SMAC family!
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
                                            <h5>Amy Grauherr</h5>
                                            <p className="small-text color-main">
                                               Proud Parent
                                            </p>
                                            <p>
                                                Our son has been attending Success Martial Arts Center (SMAC) for almost 2 years. We were looking into several martial arts centers before my son chose SMAC, which was one of the best decisions yet. We have felt like family since the first day we walked through the doors. Our son has grown leaps and bounds since starting. He is more out going and has made many friends. The instructors push the kids to the best of their ability through encouragement. They teach them respect, integrity, courage and to support their Team mates through good and bad times. Success Martial Arts Center is the best hands down.
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
                                                drumstick kielbasa burgdoggen pork chop prosciutto rump ground round.
                                                Andouille ribeye chicken swine. Biltong rump venison.
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
                                                drumstick kielbasa burgdoggen pork chop prosciutto rump ground round.
                                                Andouille ribeye chicken swine. Biltong rump venison.
                                            </p>
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Instructors */}
                <InstructorsBlock />

                <ContactForm />

                {/* Sparring / FAQ */}
                <section className="ds ms faq-section container-px-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="faq-section-left embed-responsive embed-responsive-3by2">
                                    <a href="https://www.youtube.com/embed/mcixldqDIEQ"
                                       className="faq-video embed-placeholder">

                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <FaqAccordion>
                                    <div>
                                        <span>Header</span>
                                        <span>Message</span>
                                    </div>
                                </FaqAccordion>
                            </div>
                        </div>
                    </div>
                </section>

                <LatestNews />

                {/*<GoogleMaps/>*/}

                <InfoBanner color={"red"} />

            </Layout>
        );
    }

}

export default Index

