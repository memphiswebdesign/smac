import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import ContactForm from "../components/ContactForm";
import OwlCarousel from '../components/OwlCarousel';
import InstructorsBlock from "../components/InstructorsBlock";
import Testimonials from "../components/Testimonials";



/* eslint-disable */
export default () => {
    return (
        <Layout>

            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'about', url: '/about'} ]} title={"About"} />

            <section className="ds s-py-60 s-py-md-90 s-overlay mobile-overlay about-section">
                <div className="container">
                    <div className="row d-flex justify-content-end">
                        <div className="divider-70 d-none d-xl-block"></div>
                        <div className="col-md-12 col-xl-6 ">
                            <h3 className="special-heading text-lg-left text-center">about <span
                                className="color-main">smac</span></h3>
                            <div className="divider-40 d-none d-xl-block"></div>
                            <p className="excerpt text-lg-left text-center">Fight School has specialized in
                                martial arts since 1986 and has one of the most innovative programs in the
                                nation.</p>
                            <p className="text-lg-left text-center">
                                We teach martial arts because we love it — not because we want to make money on
                                you. Unlike other martial arts schools, we do not require you to sign long term
                                contracts.
                                You just pay one low monthly fee for your martial arts and self defense classes
                                at the beginning of each month.

                                {/*<a className="about-link" href="/about">
                                    read more <i className="fa fa-level-down" aria-hidden="true"></i>
                                </a>*/}
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

            {/* Instructors */}
            <InstructorsBlock />

            <Testimonials />

            <ContactForm />

        </Layout>
    );
}
