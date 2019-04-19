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
                                        <img className="jw-sig" src="images/jw-signature-light.svg?123" alt="jason warren signature"/>
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
                                  <a className="btn btn-outline-maincolor" href="/class-schedule">Class Schedule</a>
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
                                                <img src="images/team/tim-lange-fam.jpg" alt=""/>
                                            </div>
                                            <h5>Tim Lange</h5>
                                            <p className="small-text color-main">
                                                Proud Father
                                            </p>
                                            <p>
                                                For the last two years, my boys have gone to Success Martial Arts Center.  During this time, they have learned not only how to defend themselves, but also respect, discipline, and hard work.  I’m thankful for these lessons that are shaping my children’s character. Jason Warren takes pride in each student and helps them to develop to their fullest potential.  He is always quick with a joke and very friendly with the students.
                                            </p>
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </blockquote>
                                    </div>
                                    <div
                                        className="vertical-item testimonial-item box-shadow content-padding text-center">
                                        <blockquote className="quote-item">
                                            <div className="quote-image">
                                                <img src="images/team/amy-grauherr-fam.jpg" alt=""/>
                                            </div>
                                            <h5>Amy & Jim Grauherr</h5>
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
                                                <img src="images/team/kellie-bodiford-fam.jpg" alt=""/>
                                            </div>
                                            <h5>Kellie Bodiford</h5>
                                            <p className="small-text color-main">
                                                Proud Mom
                                            </p>
                                            <p>
                                                When my son Gavin started Taekwondo two years ago at SMAC he was very shy and lacked self confidence. I can honestly say SMAC  has changed that for him. Not only has his confidence grown substantially he has made many friends at SMAC. He loves the sport and loves competing in tournaments. I am very grateful for the instructors. They go above and beyond for every student. SMAC has been such a positive for Gavin. 
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

