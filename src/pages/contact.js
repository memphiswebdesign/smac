import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../components/ContactForm";


export default () => { 
    return (
        <Layout>
        
            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'contact', url: '/contact'} ]} title={'Contact'} />

			<section className="s-py-10 s-py-md-10">
				<div className="container">
					<div className="row"> 
						<div className="col-md-6">
                        	<div className="divider-30"></div> 
							<h2 className="color-main mb-2">SMAC</h2>
							<h5 className="mt-1 color-bg-icon">SUCCESS MARTIAL ARTS CENTER</h5>
							<div className="color-bg-icon">
								<ul className="list-styled">
                                	<li><i className="fa fa-map-marker color-main"></i>&nbsp; <a href="https://www.google.com/maps/place/1443+W+Baddour+Pkwy,+Lebanon,+TN+37087/" target="_blank">1443 W Baddour Pkwy, Lebanon, TN 37087</a></li>
                                	<li><i className="fa fa-phone color-main"></i>&nbsp; <a href="tel:615.443.4783">(615) 443-4783</a></li>
                                	<li><i className="fa fa-facebook color-main"></i>&nbsp; <a href="https://www.facebook.com/smaclebanon/" target="_blank">Facebook</a></li>
                                	<li><i className="fa fa-instagram color-main"></i>&nbsp; <a href="https://www.instagram.com/smaclebanon/" target="_blank">Instagram</a></li>
                                </ul>
								<img className="mt-3" src="/images/parallax/programs-bg.jpg" />
							</div>
						</div>
						<div className="col-md-6">
            				<ContactForm />
						</div>
					</div>
				</div>
			</section>
 
        </Layout>
    );
} 
 