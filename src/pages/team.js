import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";
import { Instructors } from "../components/data";
import SocialLinkList from "../components/SocialLinkList";

export default () => {
    return (
        <Layout>
            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'about', url: '/about'}, {name: 'team', url: '/team'} ]} title={"Team"} />

            <section className="ds s-py-60 s-py-md-90">
                <div className="container">
                    <div className="row">

                    	{ Instructors.map((instructor, index) => (
                    		<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
	                        <div className="vertical-item box-shadow content-padding text-center" key={ index }>
	                          <div className="item-media">
	                            <img src={ instructor.img_src } alt={ `${instructor.name} ${instructor.title}` } />
	                            <div className="media-links">
	                              <a className="abs-link screen-reader-text" title="" href={ instructor.page }>Instructor's Page</a>
	                            </div>
	                          </div>
	                          <div className="item-content">
	                            <h5><a href="team-single.html">{ instructor.name }</a></h5>
	                            <p className="small-text color-main">{ instructor.title }</p>
	                            <p className="social-icons">
	                              <SocialLinkList list={ instructor.social } />
	                            </p>
	                          </div>
	                        </div>
	                        </div>
	                    ))}
                    </div>
                </div>
            </section>

        </Layout>
    );
}
