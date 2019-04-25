// import "../../static/js/vendor/bootstrap.bundle.min.js";
import React, { Component } from "react"
import OwlCarousel from '../components/OwlCarousel';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import LatestNews from "../components/LatestNews";
import InfoBanner from "../components/InfoBanner";
import FaqAccordion from "../components/FaqAccordion";
import InstructorsBlock from "../components/InstructorsBlock";
import Testimonials from "../components/Testimonials";


/* eslint-disable */
class Index extends Component {

    render() {
        return (
            <Layout renderHero={true} >

                <InfoBanner color={"navy"} />

                {/* About Block */}
                <section className="ds s-py-60 s-py-md-90 s-overlay mobile-overlay about-section featured-story-section">
                    <div className="container">
                        <div className="row d-flex justify-content-end">
                            <div className="divider-70 d-none d-xl-block"></div>
                            <div className="col-md-12 col-xl-6 ">
                                <h3 className="special-heading text-lg-left text-center"><a href="/blog">Latest Story</a></h3>
                                <div className="divider-40 d-none d-xl-block"></div>
                                <p className="excerpt text-lg-left text-center">"Keep your Guards up Chip.." The emotional moments shared around the World as Sergeant Rob Cesternino surprises his son back home.</p>
                                <p className="text-lg-left text-center">
                                    After 10 long months of deployment, Sergeant Cesternino surprise his son, Luca, during a blind-folded sparring match. Luca Cesternino is a skilled Taekwondo Black Belt, training in Lebanon, TN...
                                    <a className="about-link" href="/blog/2019-04-24-sergeant-cesternino-surprises-luca/">
                                        read story <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </a>
                                </p>

                                {/*Old signature for Jason Warren*/}
                                {/*<div className="signature">
                                    <div className="signature__left">
                                        <h5>Jason Warren</h5>
                                        <span>FOUNDER / CHIEF INSTRUCTOR</span>
                                    </div>
                                    <div className="signature__right">
                                        <img className="jw-sig" src="/images/jw-signature-light.svg?123" alt="jason warren signature"/>
                                    </div>
                                </div>*/}
                            </div>
                            <div className="divider-60 d-none d-xl-block"></div>
                        </div>
                    </div>
                </section>

                {/* Programs (Classes) */}
                <section className="ds ms s-py-60 s-py-md-90 s-overlay s-parallax program-section programs">
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
                                  <a className="btn btn-outline-maincolor" href="/class-schedule">Class Schedule</a>
                                </div>
                            <div className="divider-70 d-none d-lg-block"></div>
                        </div>
                    </div>
                </section>

                {/* What Clients Say */}
                <Testimonials />

                {/* Instructors */}
                <InstructorsBlock />

                <ContactForm />

                {/* Sparring / FAQ */}
                <section className="ds ms faq-section container-px-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="faq-section-left embed-responsive embed-responsive-3by2">
                                    <a target="_blank" href="https://www.youtube.com/watch?v=Go5_CKD4h9M"
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

