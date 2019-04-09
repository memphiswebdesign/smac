import React from "react"
import HeroSlider from './HeroSlider';
import MobileSearch from '../components/MobileSearch';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../../styles/main.scss";

function renderHero(shouldRender) {
    if (shouldRender) {
        return <HeroSlider/>
    }
}

export default (props) => (
    <>
        <div id="canvas">
            <div id="box_wrapper">

                <MobileSearch/>

                    <Navbar/>
                    { renderHero(props.renderHero) }

                {/* Render all the children passed into the Layout component */}
                { props.children }

                <Footer />

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

