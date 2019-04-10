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

            </div>
        </div>
    </>
);

