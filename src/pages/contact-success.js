import React from 'react';
import Layout from '../components/Layout';
import InfoBanner from "../components/InfoBanner";


export default () => (
	<Layout>

	    <section className="ds s-py-60 s-py-md-60 c-mb-20 c-gutter-20 form-section">
	        <div className="container">
	            <div className="row">
	                <div className="col-md-12 text-center animate" data-animation="scaleAppear" data-delay="120">
	                	<h4 className="mb-3">Thanks for reaching out!</h4>
	                	<h5 className="mt-3">Successfully submitted the form.</h5>
			            <p>A <strong>SMAC Instructor</strong> will be in touch very soon.</p>
	                </div>
	            </div>
	        </div>
	    </section>

        <InfoBanner color={"red"} />

    </Layout>
)
