import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";
import InfoBanner from "../components/InfoBanner";


export default () => {
    return (
        <Layout>

        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'private lessons', url: '/private-lessons'}]} title={"Private Lessons"}/>

        	<section className="ds s-py-60 s-py-md-90 summer-camp-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center animate" data-animation="fadeIn" data-delay="70">
                        	<h4>SMAC Private Lessons</h4>
                        </div>
					</div>
				</div> 
			</section>

            <InfoBanner color={"red"} />

        </Layout>
    );
} 