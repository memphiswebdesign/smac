import React from "react"
import HeroSlider from '../templates/HeroSlider';
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

