import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>

            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'trial', url: '/trial'} ]} title={"Trial"} />
            <section className="ds s-py-40 s-py-md-60 team-grid">
                <div className="container">
                    <div className="row">
                    	<div className="col-md-5 col-xs-12">
							<h4>Sign-up today for your<br /><span className="color-main">first Intro Lesson:</span></h4>
							<ul className="list-styled">  
								<li> 20 minute 1 on 1 lesson while parent observes</li>
								<li> Child breaks a board</li>
								<li> Discuss with parent about the needs of their child </li>
								<li> Adult students will join their class</li>
							</ul>
							<img src="/images/gallery/smac-boys-uniform-backs.jpg" alt="Intro Class"/>
                    	</div>
                    	<div className="col-md-7 col-xs-12">
                    		<h6>Fill out form & we will be in touch soon to setup your first class.</h6>
                    		<form name="contact-form" action="/contact-success" method="post" data-netlify="true">
		                        <input type="hidden" name="form-name" value="contact-form" />
		                        <div className="row">
		                            <div className="col-xl-12">
		                                <div className="form-group">
		                                    <input className="form-control" type="text" name="full_name"
	                                           placeholder="Full Name" defaultValue="" required="required"/>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="row">
		                            <div className="col-md-6">
		                                <div className="form-group">
		                                    <input className="form-control" type="email" name="email_address"
	                                           placeholder="Email Address" defaultValue="" required="required"/>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="form-group">
		                                    <input className="form-control" type="tel" name="phone_number"
                                           		placeholder="Phone Number" defaultValue="" required="required"/>
		                                </div>
		                            </div>
		                            <div className="col-xl-12">
		                                <div className="form-group">
		                                <h6 className="m-0 mt-2 mb-1">Classes are for who?</h6>
		                                    <select className="form-control">
											  <option value="volvo">Child (4/5 year old)</option>
											  <option value="saab">Kid (6-12)</option>
											  <option value="mercedes">Teen (13-18)</option>
											  <option value="audi">Adult (19+)</option>
											</select>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="row">
		                            <div className="col-12">
		                                <div className="form-group">
                                            <textarea className="form-control" rows="5" name="message_body"
                                              placeholder="Your Message" required="required"></textarea>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="row">
		                            <div className="col-12">
		                                <button className="btn btn-maincolor w-100" type="submit">Send Message</button>
		                            </div>
		                        </div>
		                    </form>
                    	</div>
                    </div>
                </div>
            </section>
            
        </Layout>
    );
}
