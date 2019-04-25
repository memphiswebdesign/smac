import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>

        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'Programs', url: '/programs'}, {name: 'Kids Classes', url: '/kids-taekwondo-class'}]} title={"Kids Taekwondo Class"}/>
        	<section className="ds s-py-40 s-py-md-60 team-grid">
                <div className="container">
                    <div className="row">
                    	<div className="col-md-1 col-xs-12"></div>
                    	<div className="col-md-5 col-xs-12">
							<img src="/images/gallery/smac-kids-class.jpg" alt="Kids Taekwondo Class"/>
                    	</div>
                    	<div className="col-md-5 col-xs-12">
                    		<h2>Kids Classes</h2>
                    		<p>This program is for ages 6-12 year olds. We have a built-in Bully defense system where they learn basic self-defense along with learning respect for one another and adults. At SMAC, we also encourage students with their school grades and check report cards and reward those who work hard and motivate those who don’t do not excel. Values such as leadership, goal setting, confidence, discipline, integrity and respect are developed through positive reinforcement.</p>
                    	</div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
