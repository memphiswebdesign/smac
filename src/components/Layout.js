import React from "react"
import HeroSlider from './HeroSlider';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../../styles/main.scss";
import SocialLinkList from "./SocialLinkList";
import {Links} from "./data";

function renderHero(shouldRender) {
    if (shouldRender) {
        return <HeroSlider/>
    }
}

export default (props) => (
    <>
        <div id="canvas">
            <div id="box_wrapper">

                <section className="page_topline ds c-my-10 s-borderbottom">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-8 text-left">
                                <h6>Success Martial Arts Center</h6>
                            </div>
                            <div className="col-4 text-right">
                            <span className="social-icons">
                                <SocialLinkList list={ Links.social }/>
                            </span>
                            </div>
                        </div>
                    </div>
                </section>

                <Navbar/>
                { renderHero(props.renderHero) }

                {/* Render all the children passed into the Layout component */}
                { props.children }

                <Footer />

            </div>
        </div>
    </>
);

