import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";
import InfoBanner from "../components/InfoBanner";


export default () => {
    return (
        <Layout>

        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'summer camp', url: '/summer-camp'}]} title={"Ultimate Summer Camp"}/>

        	<section className="ds s-py-60 s-py-md-90 summer-camp-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center animate" data-animation="fadeIn" data-delay="70">
                        	<h4>Ultimate Summer Camp Info Coming Soon..</h4>
                            <p>Get a head start. Download the Waiver. Fill it out & submit to SMAC location.</p>
                            <a className="btn btn-outline-maincolor" href="/images/docs/smac-summer-camp-waiver.pdf" target="_blank">Summer Camp Waiver</a>
                            
                        </div>
                        <div className="col-md-12 text-center ">
                            <hr />
                            <h4>Sign-up now for the SMAC Ultimate Summer Camp</h4>
                            <form name="contact-form" action="/contact-success" method="post" data-netlify="true" className="form-spaced">
                                    <input type="hidden" name="form-name" value="contact-form" />
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="child_name"
                                                       placeholder="Childs Full Name" defaultValue="" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-2">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="child_age"
                                                       placeholder="Childs Age" defaultValue="" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-2">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="child_dob"
                                                       placeholder="Childs DOB" defaultValue="" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-2">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="child_shirt"
                                                       placeholder="Shirt Size" defaultValue="" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="parent_name"
                                                       placeholder="Parent Full Name" defaultValue="" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-5">
                                            <div className="form-group">
                                                <input className="form-control" type="tel" name="phone_number"
                                                       placeholder="Phone Number" defaultValue="" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="address"
                                                       placeholder="Full Mailing Address" defaultValue="" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 text-left">
                                            <div className="form-group">
                                                <p className="mb-1"><strong>Email Address</strong></p>                                            
                                                <input className="form-control" type="email" name="email"
                                                       placeholder="Email Address" defaultValue="" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 text-left">
                                            <div className="form-group">
                                                <p className="mb-1"><strong>How did you Hear about Us?</strong></p>
                                               <select className="form-control">
                                                  <option value="volvo">Website</option>
                                                  <option value="saab">School Location</option>
                                                  <option value="mercedes">Website Ad</option>
                                                  <option value="audi">Social Media</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" rows="5" name="message_body"
                                                  placeholder="Need any additional information? Just ask." ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <button className="btn btn-maincolor" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
					</div>
				</div> 
			</section>

            <InfoBanner color={"red"} />

        </Layout>
    );
} 
