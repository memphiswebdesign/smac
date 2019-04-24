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
                            <p className="excerpt text-lg-left text-center">
                                SMAC has been serving Wilson County for nearly 30 years. In 1991 it was originally called Mid-American Taekwondo under the ownership of Ms. Sherry Gentry. In 2001 the studio was bought by Mrs. Kimberly Cerami, who then changed the name to Success Taekwondo. They had two locations in the Nashville area; Lebanon and Green Hills.
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
            <section className="ds s-py-20 s-py-md-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-lg-left">
                                Eventually Mrs. Cerami moved out of town and later sold the Green Hills location to Scott Gray and the Lebanon location to Dianna Self and Regina Puryear. Green Hills continued under the name of Success Taekwondo and the Lebanon location became Success Martial Arts Center (aka SMAC). In 2008, the studio was sold to Jason Warren and Ronnie Presley, who are the current owners.
                            </p>
                            <p className="text-lg-left">
                                Success Martial Arts Center has made its mark over the years in Wilson County and has trained many National and World Champions. All of its owners have produced many Junior Olympic and Taekwondo Nationals gold medalists. SMAC currently has four world champions who have competed all over the world and performed for the Macy’s Day Parade, Spider-Man and Captain America commercials, Into The Badlands tv series (season 1) and The Accountant, starring Ben Affleck.
                            </p>
                        </div>
                        <div className="col-md-6">                        
                            <p className="text-lg-left">
                                While we are proud of our “Success” in competition, that is not our main focus. Our main focus is character building for our students. Aspects such as confidence, discipline, focus, courtesy, improved school grades, self defense and fitness are just some of the areas we strive to develop in our students. However, if you want your child to find a sport they can compete in then there is no better place than here.
                            </p>
                            <p className="text-lg-left">
                                Positive Reinforcement is our secret to “success” in child development. Come see us at SMAC and see why this is the #1 martial arts studio for you and/or your child.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divider-30"></div>
            </section>

            {/* Instructors */}
            <InstructorsBlock />

            <Testimonials />

            <ContactForm />

        </Layout>
    );
}
