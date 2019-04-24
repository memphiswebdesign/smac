import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>
            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'programs', url: '/programs'} ]} title={'Programs'} />

            <section className="ds s-py-60 s-py-md-90">
                <div className="container">
                    <div className="row">
                        {/*Little Dragons*/}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="vertical-item text-center">
                                <div className="item-media">
                                    <img src="/images/gallery/smac-little-dragons-class.jpg" alt="Litle Dragons Class"/>
                                    <div className="media-links">
                                        <a className="abs-link" href="/little-dragons"></a>
                                    </div>
                                </div>
                                <div className="item-content">
                                	<h5>Little Dragons</h5>
                                	<p>This program is specifically designed for 4-5 year olds.</p>
                                    <a className="btn btn-outline-maincolor" href="/little-dragons">More Details</a>
                                </div> 
                            </div>
                        </div>
                        {/*Kids Programs*/}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="vertical-item text-center">
                                <div className="item-media">
                                    <img src="/images/gallery/smac-kids-class.jpg" alt="Kids Taekondo Class"/>
                                    <div className="media-links">
                                        <a className="abs-link" href="/kids-taekwondo-class"></a>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h5>Kids Taekondo Class</h5>
                                    <p>This program is for ages 6-12 year olds.</p>
                                    <a className="btn btn-outline-maincolor" href="/kids-taekwondo-class">More Details</a>
                                </div> 
                            </div>
                        </div>
                        {/*Teen & Adult Programs*/}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="vertical-item text-center">
                                <div className="item-media">
                                    <img src="/images/gallery/smac-teen-adult-class.jpg" alt="Teen and Adult Taekondo Class"/>
                                    <div className="media-links">
                                        <a className="abs-link" href="/teen-adult-taekwondo-class"></a>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h5>Teen & Adult Taekondo Class</h5>
                                    <p>This program is designed for ages 13 & up.</p>
                                    <a className="btn btn-outline-maincolor" href="/teen-adult-taekwondo-class">More Details</a>
                                </div> 
                            </div>
                        </div> 
					</div>
				</div>
			</section> 

        </Layout>
    );
}
