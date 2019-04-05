// import "../../static/js/vendor/bootstrap.bundle.min.js";
import React, { Component } from "react"
// import jquery from '../../static/js/vendor/jquery-3.3.1.min';
// window.$ = window.jQuery=jquery;


class Index extends Component {

    componentDidMount() { }

    render() {
        return (
            <>
                <div className="modal" tabIndex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="widget widget_search">
                        <form method="get" className="searchform search-form" action="/">
                            <div className="form-group">
                                <input type="text" value="" name="search" className="form-control" placeholder="Search keyword"
                                       id="modal-search-input"/>
                            </div>
                            <button type="submit" className="btn">Search</button>
                        </form>
                    </div>
                </div>

                <div className="modal fade" tabIndex="-1" role="dialog" id="messages_modal">
                    <div className="fw-messages-wrap ls p-normal">

                    </div>
                </div>

                <div id="canvas">
                    <div id="box_wrapper">

                        <section className="page_topline ds c-my-10 s-borderbottom  d-xl-none">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-8 text-left">
							<span className="social-icons">

								<a href="#" className="fa fa-facebook " title="facebook"></a>
								<a href="#" className="fa fa-twitter " title="twitter"></a>
								<a href="#" className="fa fa-google " title="google"></a>

							</span>
                                    </div>
                                    <div className="col-4 text-right">

                                <span>
								<a href="#" className="search_modal_button">
									<i className="fa fa-search"></i>
								</a>
							</span>

                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="header_absolute">

                            <header className="page_header ds ms justify-nav-center s-pt-10 s-pb-10">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-2 col-lg-3 col-11">
                                            <a href="./" className="logo">
                                                <img src="/static/images/logo.png" alt=""/>
                                            </a>
                                        </div>
                                        <div className="col-xl-8 col-lg-6 col-1 text-sm-center">

                                            <nav className="top-nav">
                                                <ul className="nav sf-menu">


                                                    <li className="active">
                                                        <a href="index.html">Home</a>
                                                        <ul>
                                                            <li>
                                                                <a href="index.html">MultiPage</a>
                                                            </li>
                                                            <li>
                                                                <a href="index_static.html">Static Intro</a>
                                                            </li>
                                                            <li>
                                                                <a href="index_singlepage.html">Single Page</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">Pages</a>
                                                        <ul>


                                                            <li>
                                                                <a href="about.html">About</a>
                                                            </li>

                                                            <li>
                                                                <a href="services.html">Programs</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="services.html">Programs 1</a>
                                                                    </li>

                                                                    <li>
                                                                        <a href="services3.html">Programs 2</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="service-single.html">Single Program</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                            <li>
                                                                <a href="pricing.html">Pricing</a>
                                                            </li>


                                                            <li>
                                                                <a href="shortcodes_iconbox.html">Shortcodes</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="shortcodes_typography.html">Typography</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_buttons.html">Buttons</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_pricing.html">Pricing</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_iconbox.html">Icon Boxes</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_progress.html">Progress</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_tabs.html">Tabs &amp; Collapse</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_bootstrap.html">Bootstrap
                                                                            Elements</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_animation.html">Animation</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_icons.html">Template Icons</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_socialicons.html">Social Icons</a>
                                                                    </li>
                                                                </ul>
                                                            </li>


                                                            <li>
                                                                <a href="shortcodes_widgets_default.html">Widgets</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="shortcodes_widgets_default.html">Default
                                                                            Widgets</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_widgets_shop.html">Shop Widgets</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shortcodes_widgets_custom.html">Custom
                                                                            Widgets</a>
                                                                    </li>
                                                                </ul>

                                                            </li>


                                                            <li>
                                                                <a href="events-left.html">Events</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="events-left.html">Left Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="events-right.html">Right Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="events-full.html">Full Width</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="event-single-left.html">Single Event</a>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="event-single-left.html">Left
                                                                                    Sidebar</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="event-single-right.html">Right
                                                                                    Sidebar</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="event-single-full.html">Full Width</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>


                                                            <li>
                                                                <a href="team.html">Instructors</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="team.html">Instructors List</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="team-single.html">Instructors Member</a>
                                                                    </li>
                                                                </ul>
                                                            </li>


                                                            <li>
                                                                <a href="comingsoon.html">Comingsoon</a>
                                                            </li>
                                                            <li>
                                                                <a href="timetable.html">Schedule</a>
                                                            </li>

                                                            <li>
                                                                <a href="faq.html">FAQ</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="faq.html">FAQ</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="faq2.html">FAQ 2</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="404.html">404</a>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Features</a>
                                                        <div className="mega-menu">
                                                            <ul className="mega-menu-row">
                                                                <li className="mega-menu-col">
                                                                    <a href="#">Headers</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="header1.html">Header Type 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header2.html">Header Type 2</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header3.html">Header Type 3</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header4.html">Header Type 4</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header5.html">Header Type 5</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header6.html">Header Type 6</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col">
                                                                    <a href="#">Side Menus</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="header-side.html">Push Left</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-right.html">Push Right</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-slide.html">Slide Left</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-slide-right.html">Slide
                                                                                Right</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-sticked.html">Sticked Left</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="header-side-sticked-right.html">Sticked
                                                                                Right</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col">
                                                                    <a href="title1.html">Title Sections</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="title1.html">Title section 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title2.html">Title section 2</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title3.html">Title section 3</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title4.html">Title section 4</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title5.html">Title section 5</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="title6.html">Title section 6</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col">
                                                                    <a href="footer1.html#footer">Footers</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="footer1.html#footer">Footer Type 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer2.html#footer">Footer Type 2</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer3.html#footer">Footer Type 3</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer4.html#footer">Footer Type 4</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer5.html#footer">Footer Type 5</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="footer6.html#footer">Footer Type 6</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col">
                                                                    <a href="copyright1.html#copyright">Copyright</a>

                                                                    <ul>
                                                                        <li>
                                                                            <a href="copyright1.html#copyright">Copyright 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright2.html#copyright">Copyright 2</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright3.html#copyright">Copyright 3</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright4.html#copyright">Copyright 4</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright5.html#copyright">Copyright 5</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="copyright6.html#copyright">Copyright 6</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>


                                                    <li>
                                                        <a href="blog-left.html">Blog</a>
                                                        <ul>

                                                            <li>
                                                                <a href="blog-right.html">Right Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-left.html">Left Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-full.html">No Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-grid.html">Blog Grid</a>
                                                            </li>

                                                            <li>
                                                                <a href="blog-single-right.html">Post</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="blog-single-right.html">Right Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="blog-single-left.html">Left Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="blog-single-full.html">No Sidebar</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                            <li>
                                                                <a href="blog-single-video-right.html">Video Post</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="blog-single-video-right.html">Right Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="blog-single-video-left.html">Left Sidebar</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="blog-single-video-full.html">No Sidebar</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                        </ul>
                                                    </li>


                                                    <li>
                                                        <a href="gallery-image.html">Gallery</a>
                                                        <ul>

                                                            <li>
                                                                <a href="gallery-image.html">Image Only</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="gallery-image-2-cols.html">2 columns</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-image.html">3 columns</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-image-4-cols-fullwidth.html">4 columns
                                                                            fullwidth</a>
                                                                    </li>

                                                                </ul>
                                                            </li>


                                                            <li>
                                                                <a href="gallery-title.html">Image With Title</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="gallery-title-2-cols.html">2 columns</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-title.html">3 column</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-title-4-cols-fullwidth.html">4 columns
                                                                            fullwidth</a>
                                                                    </li>
                                                                </ul>
                                                            </li>


                                                            <li>
                                                                <a href="gallery-excerpt.html">Image with Excerpt</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="gallery-excerpt-2-cols.html">2 columns</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-excerpt.html">3 column</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-excerpt-4-cols-fullwidth.html">4
                                                                            columns fullwdith</a>
                                                                    </li>
                                                                </ul>
                                                            </li>


                                                            <li>
                                                                <a href="gallery-tiled.html">Tiled Gallery</a>
                                                            </li>


                                                            <li>
                                                                <a href="gallery-single.html">Gallery Item</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="gallery-single.html">Style 1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="gallery-single2.html">Style 2</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                        </ul>
                                                    </li>


                                                    <li>
                                                        <a href="shop-right.html">Shop</a>
                                                        <ul>
                                                            <li>
                                                                <a href="shop-account-dashboard.html">Account</a>
                                                                <ul>

                                                                    <li>
                                                                        <a href="shop-account-details.html">Account details</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-account-addresses.html">Addresses</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-account-address-edit.html">Edit
                                                                            Address</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-account-orders.html">Orders</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-account-order-single.html">Single
                                                                            Order</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-account-downloads.html">Downloads</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-account-password-reset.html">Password
                                                                            Reset</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="shop-account-login.html">Login/Logout</a>
                                                                    </li>

                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="shop-right.html">Right Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-left.html">Left Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-product-right.html">Product Right Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-product-left.html">Product Left Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-cart.html">Cart</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-checkout.html">Checkout</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-order-received.html">Order Received</a>
                                                            </li>

                                                        </ul>
                                                    </li>


                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                        <ul>
                                                            <li>
                                                                <a href="contact.html">Contact 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="contact2.html">Contact 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="contact3.html">Contact 3</a>
                                                            </li>
                                                            <li>
                                                                <a href="contact4.html">Contact 4</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                </ul>


                                            </nav>

                                        </div>
                                        <div className="col-xl-2 col-lg-3 text-right d-none d-xl-block">

                                            <ul className="top-includes">


                                                <li>
										<span>
											<a href="#" className="btn btn-outline-maincolor">trial offer</a>
										</span>
                                                </li>


                                            </ul>

                                        </div>
                                    </div>
                                </div>

                                <span className="toggle_menu"></span>
                            </header>
                        </div>

                        <section className="s-pb-40 s-pt-0 s-py-lg-50 c-my-40 c-my-lg-15 ds contact-info">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-4 text-center">
                                        <div className="icon-box icon-absolute text-center">
                                            <div className="icon-styled">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <span>CALL US 24/7</span>
                                            <h5>+7-85-569-123</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 text-center">
                                        <div className="icon-box icon-absolute text-center">
                                            <div className="icon-styled">
                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                            <span>SEASON STREET 45/2</span>
                                            <h5>LOS ANGELES, INC - 4502</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 text-center">
                                        <div className="icon-box icon-absolute text-center">
                                            <div className="icon-styled">
                                                <i className="fa fa-clock-o"></i>
                                            </div>
                                            <span>WORKING HOURS</span>
                                            <h5>DAILY: 9AM - 8PM</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ds s-py-60 s-py-md-90 s-overlay mobile-overlay about-section">
                            <div className="container">
                                <div className="row d-flex justify-content-end">
                                    <div className="divider-70 d-none d-xl-block"></div>
                                    <div className="col-md-12 col-xl-6 ">
                                        <h3 className="special-heading text-lg-left text-center">about <span
                                            className="color-main">fight</span> school</h3>
                                        <div className="divider-40 d-none d-xl-block"></div>
                                        <p className="excerpt text-lg-left text-center">Fight School has specialized in martial
                                            arts since 1986 and has one of the most innovative programs in the nation.</p>
                                        <p className="text-lg-left text-center">
                                            We teach martial arts because we love it — not because we want to make money on you.
                                            Unlike other martial arts schools, we do not require you to sign long term
                                            contracts.
                                            You just pay one low monthly fee for your martial arts and self defense classes at
                                            the beginning of each month. Many martial arts...
                                            <a className="about-link" href="about">
                                                read more <i className="fa fa-level-down" aria-hidden="true"></i>
                                            </a>
                                        </p>

                                        <div className="signature">
                                            <div className="signature__left">
                                                <h5>Aiden Richards</h5>
                                                <span>DIRECTOR / INSTRUCTOR</span>
                                            </div>
                                            <div className="signature__right">
                                                <img src="images/signature.png" alt="signature"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider-60 d-none d-xl-block"></div>
                                </div>
                            </div>
                        </section>
                        <section className="ds ms s-py-60 s-py-md-90 s-overlay program-section programs">
                            <div className="container">
                                <div className="row">
                                    <div className="divider-70 d-none d-xl-block"></div>
                                    <div className="col-12">
                                        <h3 className="special-heading text-center">OUR programs</h3>
                                        <div className="divider-60 d-none d-xl-block"></div>
                                        <div className="divider-40 hidden-above-md"></div>

                                        <div className="owl-carousel" data-loop="false" data-margin="30" data-nav="true"
                                             data-dots="true" data-center="false" data-items="1" data-autoplay="true"
                                             data-responsive-xs="1" data-responsive-sm="2" data-responsive-md="3"
                                             data-responsive-lg="3">
                                            <div className="vertical-item text-center">
                                                <div className="item-media">
                                                    <img width="370" height="230" src="images/gallery/17.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <a href="service-single.html" className="services-icon">
                                                    <i className="fa fa-calendar"></i>
                                                </a>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="service-single.html">Kids Karate Groups</a>
                                                    </h5>
                                                    <span>10:00-11:00 AM / LIZZIE MEYER</span>
                                                    <p>
                                                        Ribeye kevin shank bacon bris fatback. Sirloin frankfurter brisket,
                                                        tri-tip pork chicken.
                                                    </p>
                                                    <div className="services-link">
                                                        <a href="service-single.html"><i className="fa fa-angle-down"
                                                                                         aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical-item text-center">
                                                <div className="item-media">
                                                    <img width="370" height="230" src="images/gallery/14.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <a href="service-single.html" className="services-icon">
                                                    <i className="fa fa-calendar"></i>
                                                </a>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="service-single.html">Teen & Adult Karate</a>
                                                    </h5>
                                                    <span>5:00-6:00 AM / ALEJANDRO DIAZ</span>
                                                    <p>
                                                        Tenderloin jerky ground round landjaeger pork ham pancetta pastrami
                                                        turkey.
                                                    </p>
                                                    <div className="services-link">
                                                        <a href="service-single.html"><i className="fa fa-angle-down"
                                                                                         aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical-item text-center">
                                                <div className="item-media">
                                                    <img src="images/gallery/01.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <a href="service-single.html" className="services-icon">
                                                    <i className="fa fa-calendar"></i>
                                                </a>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="service-single.html">Traditional Martial Arts</a>
                                                    </h5>
                                                    <span>6:00-7:00 PM / COLE BUTLER</span>
                                                    <p>
                                                        Filet mignon bresaola doner, buffalo pork belly meatball meatl swine
                                                        sirloin.
                                                    </p>
                                                    <div className="services-link">
                                                        <a href="service-single.html"><i className="fa fa-angle-down"
                                                                                         aria-hidden="true"></i></a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="vertical-item text-center">
                                                <div className="item-media">
                                                    <img width="370" height="230" src="images/gallery/17.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <a href="service-single.html" className="services-icon">
                                                    <i className="fa fa-calendar"></i>
                                                </a>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="service-single.html">Kids Karate Groups</a>
                                                    </h5>
                                                    <span>10:00-11:00 AM / LIZZIE MEYER</span>
                                                    <p>
                                                        Ribeye kevin shank bacon bris fatback. Sirloin frankfurter brisket,
                                                        tri-tip pork chicken.
                                                    </p>
                                                    <div className="services-link">
                                                        <a href="service-single.html"><i className="fa fa-angle-down"
                                                                                         aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical-item text-center">
                                                <div className="item-media">
                                                    <img width="370" height="230" src="images/gallery/14.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <a href="service-single.html" className="services-icon">
                                                    <i className="fa fa-calendar"></i>
                                                </a>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="service-single.html">Teen & Adult Karate</a>
                                                    </h5>
                                                    <span>5:00-6:00 AM / ALEJANDRO DIAZ</span>
                                                    <p>
                                                        Tenderloin jerky ground round landjaeger pork ham pancetta pastrami
                                                        turkey.
                                                    </p>
                                                    <div className="services-link">
                                                        <a href="service-single.html"><i className="fa fa-angle-down"
                                                                                         aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical-item text-center">
                                                <div className="item-media">
                                                    <img src="images/gallery/01.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="service-single.html"></a>
                                                    </div>
                                                </div>
                                                <a href="service-single.html" className="services-icon">
                                                    <i className="fa fa-calendar"></i>
                                                </a>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="service-single.html">Traditional Martial Arts</a>
                                                    </h5>
                                                    <span>6:00-7:00 PM / COLE BUTLER</span>
                                                    <p>
                                                        Filet mignon bresaola doner, buffalo pork belly meatball meatl swine
                                                        sirloin.
                                                    </p>
                                                    <div className="services-link">
                                                        <a href="service-single.html"><i className="fa fa-angle-down"
                                                                                         aria-hidden="true"></i></a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="divider-70 d-none d-xl-block"></div>
                                </div>
                            </div>
                        </section>
                        <section className="ds s-py-60 s-py-md-90 testimonials-section">
                            <div className="container">
                                <div className="row">
                                    <div className="divider-70 d-none d-xl-block"></div>
                                    <div className="col-12">
                                        <h3 className="special-heading text-center">what clients say</h3>
                                        <div className="divider-60 d-none d-xl-block"></div>
                                        <div className="owl-carousel" data-loop="false" data-margin="30" data-nav="true"
                                             data-dots="true" data-center="false" data-items="1" data-autoplay="false"
                                             data-responsive-xs="1" data-responsive-sm="1" data-responsive-md="1"
                                             data-responsive-lg="1">
                                            <div
                                                className="vertical-item testimonial-item box-shadow content-padding text-center">
                                                <blockquote className="quote-item">
                                                    <div className="quote-image">
                                                        <img src="images/team/testimonials_01.jpg" alt=""/>
                                                    </div>
                                                    <h5>Clifford Carter</h5>
                                                    <p className="small-text color-main">
                                                        VISITORS / BUSINESSMAN
                                                    </p>
                                                    <p>
                                                        Pork belly shankle brisket pig swine sausage landjaeger tri-tip
                                                        drumstick kielbasa burgdoggen pork chop prosciutto rump ground round.
                                                        Andouille ribeye chicken swine. Biltong rump venison.
                                                    </p>
                                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                                </blockquote>
                                            </div>
                                            <div
                                                className="vertical-item testimonial-item box-shadow content-padding text-center">
                                                <blockquote className="quote-item">
                                                    <div className="quote-image">
                                                        <img src="images/team/testimonials_04.jpg" alt=""/>
                                                    </div>
                                                    <h5>Clifford Carter</h5>
                                                    <p className="small-text color-main">
                                                        VISITORS / BUSINESSMAN
                                                    </p>
                                                    <p>
                                                        Pork belly shankle brisket pig swine sausage landjaeger tri-tip
                                                        drumstick kielbasa burgdoggen pork chop prosciutto rump ground round.
                                                        Andouille ribeye chicken swine. Biltong rump venison.
                                                    </p>
                                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                                </blockquote>
                                            </div>
                                            <div
                                                className="vertical-item testimonial-item box-shadow content-padding text-center">
                                                <blockquote className="quote-item">
                                                    <div className="quote-image">
                                                        <img src="images/team/testimonials_02.jpg" alt=""/>
                                                    </div>
                                                    <h5>Clifford Carter</h5>
                                                    <p className="small-text color-main">
                                                        VISITORS / BUSINESSMAN
                                                    </p>
                                                    <p>
                                                        Pork belly shankle brisket pig swine sausage landjaeger tri-tip
                                                        drumstick kielbasa burgdoggen pork chop prosciutto rump ground round.
                                                        Andouille ribeye chicken swine. Biltong rump venison.
                                                    </p>
                                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                                </blockquote>
                                            </div>
                                            <div
                                                className="vertical-item testimonial-item box-shadow content-padding text-center">
                                                <blockquote className="quote-item">
                                                    <div className="quote-image">
                                                        <img src="images/team/testimonials_03.jpg" alt=""/>
                                                    </div>
                                                    <h5>Clifford Carter</h5>
                                                    <p className="small-text color-main">
                                                        VISITORS / BUSINESSMAN
                                                    </p>
                                                    <p>
                                                        Pork belly shankle brisket pig swine sausage landjaeger tri-tip
                                                        drumstick kielbasa burgdoggen pork chop prosciutto rump ground round.
                                                        Andouille ribeye chicken swine. Biltong rump venison.
                                                    </p>
                                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
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
                                             data-responsive-lg="3">
                                            <div className="vertical-item box-shadow content-padding text-center">
                                                <div className="item-media">
                                                    <img src="images/team/01.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="team-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="team-single.html">Randall Schwartz</a>
                                                    </h5>

                                                    <p className="small-text color-main">
                                                        KIDS INSTRUCTOR
                                                    </p>
                                                    <p className="social-icons">

                                                        <a href="#" className="fa fa-facebook" title="facebook"></a>
                                                        <a href="#" className="fa fa-twitter" title="twitter"></a>
                                                        <a href="#" className="fa fa-google-plus" title="google"></a>

                                                    </p>

                                                </div>
                                            </div>
                                            <div className="vertical-item box-shadow content-padding text-center">
                                                <div className="item-media">
                                                    <img src="images/team/02.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="team-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="team-single.html">Randall Schwartz</a>
                                                    </h5>

                                                    <p className="small-text color-main">
                                                        KIDS INSTRUCTOR
                                                    </p>
                                                    <p className="social-icons">

                                                        <a href="#" className="fa fa-facebook" title="facebook"></a>
                                                        <a href="#" className="fa fa-twitter" title="twitter"></a>
                                                        <a href="#" className="fa fa-google-plus" title="google"></a>

                                                    </p>

                                                </div>
                                            </div>
                                            <div className="vertical-item box-shadow content-padding text-center">
                                                <div className="item-media">
                                                    <img src="images/team/03.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="team-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="team-single.html">Randall Schwartz</a>
                                                    </h5>

                                                    <p className="small-text color-main">
                                                        KIDS INSTRUCTOR
                                                    </p>
                                                    <p className="social-icons">

                                                        <a href="#" className="fa fa-facebook" title="facebook"></a>
                                                        <a href="#" className="fa fa-twitter" title="twitter"></a>
                                                        <a href="#" className="fa fa-google-plus" title="google"></a>

                                                    </p>

                                                </div>
                                            </div>
                                            <div className="vertical-item box-shadow content-padding text-center">
                                                <div className="item-media">
                                                    <img src="images/team/01.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="team-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="team-single.html">Randall Schwartz</a>
                                                    </h5>

                                                    <p className="small-text color-main">
                                                        KIDS INSTRUCTOR
                                                    </p>
                                                    <p className="social-icons">

                                                        <a href="#" className="fa fa-facebook" title="facebook"></a>
                                                        <a href="#" className="fa fa-twitter" title="twitter"></a>
                                                        <a href="#" className="fa fa-google-plus" title="google"></a>

                                                    </p>

                                                </div>
                                            </div>
                                            <div className="vertical-item box-shadow content-padding text-center">
                                                <div className="item-media">
                                                    <img src="images/team/02.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="team-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="team-single.html">Randall Schwartz</a>
                                                    </h5>

                                                    <p className="small-text color-main">
                                                        KIDS INSTRUCTOR
                                                    </p>
                                                    <p className="social-icons">

                                                        <a href="#" className="fa fa-facebook" title="facebook"></a>
                                                        <a href="#" className="fa fa-twitter" title="twitter"></a>
                                                        <a href="#" className="fa fa-google-plus" title="google"></a>

                                                    </p>

                                                </div>
                                            </div>
                                            <div className="vertical-item box-shadow content-padding text-center">
                                                <div className="item-media">
                                                    <img src="images/team/03.jpg" alt=""/>
                                                    <div className="media-links">
                                                        <a className="abs-link" title="" href="team-single.html"></a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <h5>
                                                        <a href="team-single.html">Randall Schwartz</a>
                                                    </h5>

                                                    <p className="small-text color-main">
                                                        KIDS INSTRUCTOR
                                                    </p>
                                                    <p className="social-icons">

                                                        <a href="#" className="fa fa-facebook" title="facebook"></a>
                                                        <a href="#" className="fa fa-twitter" title="twitter"></a>
                                                        <a href="#" className="fa fa-google-plus" title="google"></a>

                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider-70 d-none d-xl-block"></div>
                                </div>
                            </div>
                        </section>
                        <section className="ds s-py-60 s-py-md-90 c-mb-20 c-gutter-20 form-section">
                            <div className="container">
                                <div className="row">
                                    <div className="divider-70 d-none d-xl-block"></div>
                                    <div className="col-12">
                                        <h3 className="special-heading text-center">GET YOUR FREE PASS</h3>
                                        <div className="divider-60 d-none d-xl-block"></div>
                                        <div className="divider-40 hidden-above-md"></div>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-xs-12 col-md-4">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" name="text_1fcfb46"
                                                               placeholder="Full Name" value="" required="required"/>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-md-4">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" name="text_42598d5"
                                                               placeholder="Phone Number" value="" required="required"/>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-md-2">
                                                    <div className="form-group">
                                                        <div className="field-date">
                                                            <select className="form-control" name="date_time_42a77ed"
                                                                    required="required">
                                                                <option value="">Date</option>
                                                                <option value="Date">Date</option>
                                                                <option value="Date">Date</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-md-2">
                                                    <div className="form-group">
                                                        <div className="field-date">
                                                            <select className="form-control" name="date_time_b63914d"
                                                                    required="required">
                                                                <option value="">Time</option>
                                                                <option value="Time">Time</option>
                                                                <option value="Time">Time</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                <textarea className="form-control" rows="5" name="textarea_edfe99b"
                                                          placeholder="Your Message" required="required"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <button className="btn btn-maincolor" type="submit">get pass now</button>
                                                    <button className="btn btn-outline-maincolor" type="submit">our contacts
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="divider-40 d-none d-xl-block"></div>
                                </div>
                            </div>
                        </section>
                        <section className="ds ms faq-section container-px-0">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="faq-section-left embed-responsive embed-responsive-3by2">
                                            <a href="https://www.youtube.com/embed/mcixldqDIEQ"
                                               className="faq-video embed-placeholder">

                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="faq-section-right">
                                            <div className="divider-90 d-none d-xl-block"></div>
                                            <h3 className="special-heading text-lg-left text-center">sparring / faq</h3>
                                            <div className="divider-50 d-none d-xl-block"></div>
                                            <div className="divider-40 hidden-above-md"></div>
                                            <div id="accordion01" role="tablist">
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="collapse01_header">
                                                        <h5>
                                                            <a data-toggle="collapse" href="#collapse01" aria-expanded="true"
                                                               aria-controls="collapse01">
                                                                <i className="fa fa-pencil"></i>
                                                                Do I have to be in shape to get started?
                                                            </a>
                                                        </h5>
                                                    </div>

                                                    <div id="collapse01" className="collapse show" role="tabpanel"
                                                         aria-labelledby="collapse01_header" data-parent="#accordion01">
                                                        <div className="card-body">

                                                            <p>Not at all. You’ll find that our classes for beginners are the
                                                                perfect way to build up your overall fitness level regardless of
                                                                your physical condition. Good luck!</p>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card">
                                                    <div className="card-header" role="tab" id="collapse02_header">
                                                        <h5>
                                                            <a className="collapsed" data-toggle="collapse" href="#collapse02"
                                                               aria-expanded="false" aria-controls="collapse02">
                                                                <i className="fa fa-pencil"></i>
                                                                Can I come and watch a class?
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapse02" className="collapse" role="tabpanel"
                                                         aria-labelledby="collapse02_header" data-parent="#accordion01">
                                                        <div className="card-body">
                                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                            sapiente ea proident.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="collapse03_header">
                                                        <h5>
                                                            <a className="collapsed" data-toggle="collapse" href="#collapse03"
                                                               aria-expanded="false" aria-controls="collapse02">
                                                                <i className="fa fa-pencil"></i>
                                                                Am I too old to start martial arts training?
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapse03" className="collapse" role="tabpanel"
                                                         aria-labelledby="collapse03_header" data-parent="#accordion01">
                                                        <div className="card-body">
                                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                            sapiente ea proident.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card">
                                                    <div className="card-header" role="tab" id="collapse04_header">
                                                        <h5>
                                                            <a className="collapsed" data-toggle="collapse" href="#collapse04"
                                                               aria-expanded="false" aria-controls="collapse04">
                                                                <i className="fa fa-pencil"></i>
                                                                Will I get hurt during the training?
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapse04" className="collapse" role="tabpanel"
                                                         aria-labelledby="collapse04_header" data-parent="#accordion01">
                                                        <div className="card-body">
                                                            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                                                            synth nesciunt you probably haven't heard of them accusamus labore
                                                            sustainable sunt aliqua put a bird on it squid single-origin coffee
                                                            shoreditch et.
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="divider-90 d-none d-xl-block"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ds s-pt-60 s-pb-0 s-py-md-90 c-mb-30 news-section">
                            <div className="container">
                                <div className="row">
                                    <div className="divider-70 d-none d-xl-block"></div>
                                    <div className="col-12">
                                        <h3 className="special-heading text-center">latest news</h3>
                                        <div className="divider-60 d-none d-xl-block"></div>
                                        <div className="divider-40 hidden-above-md"></div>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-4">
                                                <article
                                                    className="vertical-item content-padding padding-small post type-post status-publish format-standard has-post-thumbnail">
                                                    <div className="item-media post-thumbnail">
                                                        <a href="blog-single-@@type.html">
                                                            <img src="images/gallery/09.jpg" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="item-content">
                                                        <header className="entry-header">
                                                            <div className="entry-meta">
                                                                <div className="entry-date">
                                                                    <a href="blog-single-video-@@type.html" rel="bookmark">
                                                                        <time className="published updated"
                                                                              dateTime="2018-03-18T15:15:12+00:00">
                                                                            26 dec 2017
                                                                        </time>
                                                                    </a>
                                                                </div>
                                                                <div className="entry-categories">
                                                                    <a href="#">karate</a>
                                                                </div>
                                                            </div>
                                                            <h4 className="entry-title">
                                                                <a href="blog-single-@@type.html" rel="bookmark">
                                                                    Iain Aber Karate Seminar in Los
                                                                </a>
                                                            </h4>
                                                        </header>


                                                        <div className="entry-content">
                                                            <p className="text-lg-left text-center">A special treat is coming
                                                                up, when world-renown Iain Aber will be in Los Angeles.</p>
                                                            <div className="blog-adds">
													<span className="like-count">
														<i className="fa fa-heart" aria-hidden="true"></i>
														7420
													</span>
                                                                <span className="views-count">
														<i className="fa fa-eye" aria-hidden="true"></i>
														5209
													</span>
                                                                <span className="comment-count">
														<i className="fa fa-comment" aria-hidden="true"></i>
														997
													</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-12 col-lg-4">
                                                <article
                                                    className="vertical-item content-padding padding-small post type-post status-publish format-standard has-post-thumbnail">
                                                    <div className="item-media post-thumbnail">
                                                        <a href="blog-single-@@type.html">
                                                            <img src="images/gallery/04.jpg" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="item-content">
                                                        <header className="entry-header">
                                                            <div className="entry-meta">
                                                                <div className="entry-date">
                                                                    <a href="blog-single-video-@@type.html" rel="bookmark">
                                                                        <time className="published updated"
                                                                              dateTime="2018-03-18T15:15:12+00:00">
                                                                            27 dec 2017
                                                                        </time>
                                                                    </a>
                                                                </div>
                                                                <div className="entry-categories">
                                                                    <a href="#">jiu-jitsu</a>
                                                                </div>
                                                            </div>
                                                            <h4 className="entry-title">
                                                                <a href="blog-single-@@type.html" rel="bookmark">
                                                                    Knee Pain in Martial Arts
                                                                </a>
                                                            </h4>
                                                        </header>


                                                        <div className="entry-content">
                                                            <p className="text-lg-left text-center">It is an unfortunate fact
                                                                that many martial artists suffer from knee pain.</p>
                                                            <div className="blog-adds">
													<span className="like-count">
														<i className="fa fa-heart" aria-hidden="true"></i>
														7420
													</span>
                                                                <span className="views-count">
														<i className="fa fa-eye" aria-hidden="true"></i>
														5209
													</span>
                                                                <span className="comment-count">
														<i className="fa fa-comment" aria-hidden="true"></i>
														997
													</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-md-12 col-lg-4">
                                                <article
                                                    className="vertical-item content-padding padding-small post type-post status-publish format-standard has-post-thumbnail">
                                                    <div className="item-media post-thumbnail">
                                                        <a href="blog-single-@@type.html">
                                                            <img src="images/gallery/05.jpg" alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="item-content">
                                                        <header className="entry-header">
                                                            <div className="entry-meta">
                                                                <div className="entry-date">
                                                                    <a href="blog-single-video-@@type.html" rel="bookmark">
                                                                        <time className="published updated"
                                                                              dateTime="2018-03-18T15:15:12+00:00">
                                                                            30 dec 2017
                                                                        </time>
                                                                    </a>
                                                                </div>
                                                                <div className="entry-categories">
                                                                    <a href="#">kick boxing</a>
                                                                </div>
                                                            </div>
                                                            <h4 className="entry-title">
                                                                <a href="blog-single-@@type.html" rel="bookmark">
                                                                    Self-Defense Combat Inside a Car
                                                                </a>
                                                            </h4>
                                                        </header>


                                                        <div className="entry-content">
                                                            <p className="text-lg-left text-center">For self-defense, awareness,
                                                                escape. strategies take precedent over fighting.</p>
                                                            <div className="blog-adds">
													<span className="like-count">
														<i className="fa fa-heart" aria-hidden="true"></i>
														7420
													</span>
                                                                <span className="views-count">
														<i className="fa fa-eye" aria-hidden="true"></i>
														5209
													</span>
                                                                <span className="comment-count">
														<i className="fa fa-comment" aria-hidden="true"></i>
														997
													</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider-10 d-none d-xl-block"></div>
                                </div>
                            </div>
                        </section>
                        <section className="ds ms page_map main-map" data-draggable="false" data-scrollwheel="false">

                            <div className="marker">
                                <div className="marker-address">sydney, australia, Liverpool street, 66</div>
                                <div className="marker-title">Reach Us</div>
                                <div className="marker-description">

                                    <ul className="list-unstyled">
                                        <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-map-marker"></i>
									</span>

									<span>
										Sydney, Australia, Liverpool street, 66
									</span>
								</span>
                                        </li>

                                        <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-phone"></i>
									</span>

									<span>
										1 (800) 123-45-67
									</span>
								</span>
                                        </li>
                                        <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-envelope"></i>
									</span>

									<span>
										mail@example.com
									</span>
								</span>
                                        </li>
                                    </ul>
                                </div>

                                <img className="marker-icon" src="images/map_marker_icon.png" alt=""/>
                            </div>


                        </section>
                        <section className="s-py-20 s-py-lg-50 c-my-40 c-my-lg-15 cs s-parallax s-overlay contact-info">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-4 text-center">
                                        <div className="icon-box icon-absolute text-center">
                                            <div className="icon-styled">
                                                <i className="color-main fa fa-phone"></i>
                                            </div>
                                            <span>CALL US 24/7</span>
                                            <h5>+7-85-569-123</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 text-center">
                                        <div className="icon-box icon-absolute text-center">
                                            <div className="icon-styled">
                                                <i className="color-main fa fa-map-marker"></i>
                                            </div>
                                            <span>SEASON STREET 45/2</span>
                                            <h5>LOS ANGELES, INC - 4502</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 text-center">
                                        <div className="icon-box icon-absolute text-center">
                                            <div className="icon-styled">
                                                <i className="color-main fa fa-clock-o"></i>
                                            </div>
                                            <span>WORKING HOURS</span>
                                            <h5>DAILY: 9AM - 8PM</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <footer
                            className="page_footer ds s-parallax s-overlay s-pt-50 s-pb-10 s-pb-lg-30 s-py-lg-90 c-mb-20 c-mb-lg-0 c-gutter-60">
                            <div className="container">
                                <div className="row align-items-start justify-content-center">
                                    <div className="divider-90 d-none d-xl-block"></div>

                                    <div className="col-md-6 col-lg-4 text-center animate" data-animation="fadeInUp">

                                        <div className="widget widget_recent_entries">

                                            <h3 className="widget-title">Recent Posts</h3>

                                            <ul>
                                                <li>
                                                    <a href="blog-single-right.html">How I Lost The Secret Of My Dazzling
                                                        Success For 20 Years</a>
                                                    <span className="post-date">26 dec 2017</span>
                                                </li>
                                                <li>
                                                    <a href="blog-single-right.html">Make It Your Destiny To Accomplish Great
                                                        Things In Your Life</a>
                                                    <span className="post-date">27 dec 2017</span>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="col-md-6 col-lg-4 text-center animate" data-animation="fadeInUp">
                                        <div className="widget widget_icons_list">
                                            <a href="./" className="logo flex-column text-center">
                                                <img src="images/logo.png" alt="logo"/>
                                            </a>
                                            <p>Fight School has specialized in martial arts since 1986 and has one of the most
                                                innovative programs in the nation.</p>
                                            <div className="widget widget_social_buttons">
                                                <a href="https://www.facebook.com/"
                                                   className="fa fa-facebook border-icon rounded-icon" title="facebook"></a>
                                                <a href="https://twitter.com/"
                                                   className="fa fa-twitter border-icon rounded-icon" title="twitter"></a>
                                                <a href="https://www.google.com/"
                                                   className="fa fa-google-plus border-icon rounded-icon" title="google"></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 text-center animate" data-animation="fadeInUp">
                                        <div className="widget widget_mailchimp">

                                            <h3 className="widget-title">Newsletter</h3>

                                            <p>
                                                Subscribe to our Newsletter to be updated.
                                                <br/>
                                                We promise not to spam.
                                            </p>

                                            <form className="signup" action="/">
                                                <label htmlFor="mailchimp_email">
                                                    <span className="screen-reader-text">Subscribe:</span>
                                                </label>

                                                <input id="mailchimp_email" name="email" type="email"
                                                       className="form-control mailchimp_email" placeholder="Email Address"/>

                                                <button type="submit" className="search-submit">
                                                    <span className="screen-reader-text">Subscribe</span>
                                                </button>
                                                <div className="response"></div>
                                            </form>

                                        </div>
                                    </div>


                                    <div className="divider-70 d-none d-xl-block"></div>
                                </div>
                            </div>
                        </footer>

                        <section className="page_copyright ds s-py-10 s-py-md-5">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="divider-20 d-none d-lg-block"></div>
                                    <div className="col-md-12 text-center">
                                        <p>&copy; Copyright <span className="copyright_year">2018</span> All Rights Reserved</p>
                                    </div>
                                    <div className="divider-20 d-none d-lg-block"></div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </>
        );
    }

}

export default Index

