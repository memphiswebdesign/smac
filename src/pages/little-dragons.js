import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>

        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'Programs', url: '/programs'}, {name: 'Litte Dragons', url: '/little-dragons'}]} title={"Little Dragons Class"}/>
        	<section className="ds s-py-40 s-py-md-60 team-grid">
                <div className="container">
                    <div className="row">
                    	<div className="col-md-1 col-xs-12"></div>
                    	<div className="col-md-5 col-xs-12">
                        	<img src="/images/gallery/smac-little-dragons-class.jpg" alt="Litle Dragons Class"/>
                    	</div>
                    	<div className="col-md-5 col-xs-12">
                    		<h2>Little Dragons</h2>
                    		<p>This program is specifically designed for 4-5 year olds. At this age, our goal is to increase focus and attention span through the discipline of traditional martial arts. We keep the class fun with games that also help with coordination and concentration.</p>
                    	</div>
                    </div>
                </div>
            </section>

        </Layout>
    );
} 
