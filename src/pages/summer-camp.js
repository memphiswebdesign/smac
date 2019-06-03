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
                        	<h4>June 3rd-7th, 17th-21st and July 8th-13th.</h4>
                            <h5 className="mt-0">Only $99 per week!</h5>
                            <a className="btn btn-outline-maincolor" href="/images/docs/smac-summer-camp-waiver.pdf" target="_blank">Summer Camp Waiver</a>
                            <a className="btn btn-outline-maincolor" href="#signup">Sign-up</a>
                        </div>
                        <div className="divider-40"></div>
                        <div className="col-md-3">
                            <a href="/images/docs/smac-summer-camp-waiver.pdf" target="_blank"><img src="/images/smac-summer-camp-flyer.jpg" alt="SMAC Summer Camp Flyer" /></a>
                        </div>
                        <div className="col-md-9">
                            <div className="divider-20"></div>
                            <p>Folks, the summer is just about here and many you will need a place to send your kids. Have you ever considered a camp that is full of fun and games along with learning vital skills such as confidence, discipline, teamwork, focus and respect? Well SMAC is the place for you.</p>
                            <p>Here at SMAC, we provide a fun and safe environment that is packed full of games, Arts and crafts, basic acrobatics, martial arts and a built-in Bully defense? What more can you ask for? Below are some of the reasons your child would love our camp!!!</p>
                        </div>
                        <div className="divider-20"></div> 
                        <div className="col-md-12 text-center"><hr /></div>
                        <div className="col-md-6">
                            <ol className="list-num">
                                <li>Big Nerf Wars</li>
                                <li><strong>Fun Games such as:</strong> Ninja Dodgeball, Ultimate Dodgeball, Trampoline Dodgeball, Ninja Soccer, Taekwondo Baseball, High Jump Contests, Relay Races, Ninja Obstacle Course, Zombies and much much more.</li>
                                <li>Martial Arts</li>
                                <li>Acrobatics</li>
                                <li>Field Trips</li>
                                <li>Bully Defense</li>
                                <li>Arts and Crafts</li>
                            </ol>
                            <div className="divider-20"></div>
                        </div>
                        <div className="col-md-6">
                            <h5 className="mb-2">Prices vary based on the number of weeks your child attends.</h5>
                            <ul className="list-styled">
                                <li>1-3 Weeks = 119.00 per week</li>
                                <li>4-6 weeks = 109.00 per week</li>
                                <li>7-9 weeks = 99.00 per week</li>
                            <span className="color-main">*</span> <em>Closed Memorial Day, Closed July 4-5 for Independence Day</em>
                            </ul>
                            <div className="alert alert-primary">For weeks, June 3-7, 17-21 and July 8-13, SMAC Summer Camp is only $99/week. Register Now!</div>
                        </div>
                        <div id="signup" className="col-md-12 text-center">
                            <hr />
                            <h4>Sign-up now for the SMAC Ultimate Summer Camp</h4>
                            <form name="summer-camp-form" action="/contact-success" method="post" data-netlify="true" className="form-spaced">
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
                                        <div className="col-xl-12 text-left">
                                            <div className="form-group">
                                                <p className="mb-1"><strong>Full Mailing Address</strong></p>                                            
                                                <input className="form-control" type="text" name="address"
                                                       placeholder="Mailing Address (Street/City/Zip)" defaultValue="" required="required"/>
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
