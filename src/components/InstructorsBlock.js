import React, { Component } from 'react';
import { Instructors } from "./data";
import SocialLinkList from "./SocialLinkList";

class InstructorsBlock extends Component {

  render(props) {
    return (
        <>
          <section className="ds ms s-py-60 s-py-md-90 s-overlay team-section">
            <div className="container">
              <div className="row">
                <div className="divider-70 d-none d-xl-block"></div>
                <div className="col-12">
                  <h3 className="special-heading text-center">OUR INSTRUCTORS</h3>
                  <div className="divider-60 d-none d-xl-block"></div>
                  <div className="divider-40 hidden-above-md"></div>
                  <div className="owl-carousel" data-loop="true" data-margin="30" data-nav="true"
                       data-dots="true" data-center="false" data-items="1" data-autoplay="true"
                       data-responsive-xs="1" data-responsive-sm="2" data-responsive-md="3"
                       data-responsive-lg="4">
                    { Instructors.map((instructor, index) => (
                        <div className="vertical-item box-shadow content-padding text-center" key={ index }>
                          <div className="item-media">
                            <img src={ instructor.img_src } alt={ `${instructor.name} ${instructor.title}` } />
                            <div className="media-links">
                              <a className="abs-link" title="" href={ instructor.page }></a>
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
                    ))}
                  </div>
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="divider-20 d-none d-lg-block"></div>
                    <div className="col-md-12 text-center">
                      <a className="btn btn-outline-maincolor" href="/team">Meet the Team</a>
                    </div>
                    <div className="divider-20 d-none d-lg-block"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
  }
}

export default InstructorsBlock;
