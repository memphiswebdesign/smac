import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";
import InfoBanner from "../components/InfoBanner";


export default () => {
    return (
        <Layout>

        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'birthday parties', url: '/birthday-parties'}]} title={"Birthday Parties"}/>

        	<section className="ds s-py-60 s-py-md-90 summer-camp-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center animate" data-animation="fadeIn" data-delay="70">
                        	<h2>SMAC Birthday Parties!!!</h2>
                        </div>
                        <div className="divider-60"></div>
					</div>
                    <div className="row">
                        <div className="col-sm-3 col-xs-6"><img src="/images/party/smac-party-1.jpg" alt={""}/></div>
                        <div className="col-sm-3 col-xs-6"><img src="/images/party/smac-party-4.jpg" alt={""}/></div>
                        <div className="col-sm-3 col-xs-6"><img src="/images/party/smac-party-3.jpg" alt={""}/></div>
                        <div className="col-sm-3 col-xs-6"><img src="/images/party/smac-party-2.jpg" alt={""}/></div>
                    </div>
                    <div className="row">
                        <div className="divider-60"></div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
                            <h4>BASIC ($200.00)</h4>
                            <ul className="list-styled">
                                <li>1.5 Hours</li>
                                <li>Fun Games</li>
                                <li>Birthday Child Breaks Board</li>
                                <li>Cut Cake w/ Sword</li>
                                <li>Belt Line</li>
                            </ul>
                        </div>
                        <div className="col-sm-5">
                            <h4>NINJA NERF ($250.00)</h4>
                            <ul className="list-styled">
                                <li>2 Hours</li>
                                <li>2 Huge Nerf forts with tunnels and sniper holes</li>
                                <li>Basic Nerf & Capture the Flag Nerf</li>
                                <li>Birthday Child Breaks Board</li>
                                <li>Cut Cake w/ Sword</li>
                                <li>Belt Line </li>
                                <li><strong>Safety Glasses Must Be Worn At All Times</strong></li>
                                <li><strong>Bring Your Own Nerf Guns (we provide the bullets)</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider-40"></div>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
                            <h4>BOARD BREAKING ($250.00)</h4>
                            <ul className="list-styled">
                                <li>2 Hours</li>
                                <li>Fun Games</li>
                                <li>Every Child Gets to Break a Board</li>
                                <li>10 min Lesson Teaching the Technique Used to Break Their Board</li>
                                <li>Cut Cake w/ Sword</li>
                                <li>Belt Line</li>
                            </ul>
                        </div>
                        <div className="col-sm-5">
                            <h4>NINJA NIGHT ($300.00)</h4>
                            <ul className="list-styled">
                                <li>2 Hours</li>
                                <li>Fun Games in the Dark Under Black Lights (must wear white shirt or shorts in order to glow, this is for safety reasons)</li>
                                <li>Birthday Child Breaks Board</li>
                                <li>Cut Cake w/ Sword</li>
                                <li>Belt Line</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider-40"></div>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 text-center">
                            <hr />
                            <div><h4 className="mb-3">Fun Games Consist of the following:</h4></div>
                            <p><span class="color-main">&bull;</span> Ninja Dodge Ball &nbsp;
                            <span class="color-main">&bull;</span> Pyramid Dodgeball &nbsp;
                            <span class="color-main">&bull;</span> Trampoline Dodge Ball &nbsp;
                            <span class="color-main">&bull;</span> Ultimate Dodge Ball &nbsp;
                            <span class="color-main">&bull;</span> Pad Jump Contest &nbsp;
                            <span class="color-main">&bull;</span> Taekwondo Says &nbsp;
                            <span class="color-main">&bull;</span> Ninja Soccer  &nbsp;
                            <span class="color-main">&bull;</span> Taekwondo Baseball &nbsp;
                            <span class="color-main">&bull;</span> Relay Races</p>
                            <div><em>(Not every game will get to be played)</em></div>
                        </div>
                    </div>
				</div>
			</section>

            <InfoBanner color={"red"} />

        </Layout>
    );
}
