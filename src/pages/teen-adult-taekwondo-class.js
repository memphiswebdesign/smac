import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>

        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'Programs', url: '/programs'}, {name: 'Teen & Adult Programs', url: '/teen-adult-taekwondo-class'}]} title={"Teen & Adult Taekwondo Class"}/>
        	<section className="ds s-py-40 s-py-md-60 team-grid">
                <div className="container">
                    <div className="row">
                    	<div className="col-md-1 col-xs-12"></div>
                    	<div className="col-md-5 col-xs-12">
                        	<img src="/images/gallery/smac-teen-adult-class.jpg" alt="Teen and Adult Taekwondo Class"/>
                    	</div>
                    	<div className="col-md-5 col-xs-12">
                    		<h2>Teen & Adult Classes</h2>
                    		<p> This program is designed for ages 13 & up. Our emphasis is on self-defense and fitness while teaching the traditional art of Taekwondo. The first half of the class focuses on intense fitness while the last half is traditional Taekwondo.</p>
                    	</div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
