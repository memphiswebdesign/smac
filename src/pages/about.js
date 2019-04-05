import React from "react"

export default () => {
    return (
        <>
            <div className="modal" tabIndex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="widget widget_search">
                    <form method="get" className="searchform search-form" action="/">
                        <div className="form-group">
                            <input type="text" value="" name="search" className="form-control"
                                   placeholder="Search keyword" id="modal-search-input"/>
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


                    <section className="page_topline ds ms s-borderbottom c-my-10 d-lg-none">
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


                    <header className="page_header ds ms justify-nav-center s-pt-10 s-pb-10">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-3 col-11">
                                    <a href="./" className="logo">
                                        <img src="images/logo.png" alt=""/>
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

                        <span className="toggle_menu"><span></span></span>
                    </header>

                    <section className="page_title ds s-parallax s-overlay s-py-5">
                        <div className="container">
                            <div className="row">

                                <div className="divider-45"></div>

                                <div className="col-md-12 text-center">
                                    <h1 className="bold">About </h1>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="./">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            About
                                        </li>
                                    </ol>
                                </div>

                                <div className="divider-50"></div>

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
                                    <p className="excerpt text-lg-left text-center">Fight School has specialized in
                                        martial arts since 1986 and has one of the most innovative programs in the
                                        nation.</p>
                                    <p className="text-lg-left text-center">
                                        We teach martial arts because we love it — not because we want to make money on
                                        you. Unlike other martial arts schools, we do not require you to sign long term
                                        contracts.
                                        You just pay one low monthly fee for your martial arts and self defense classes
                                        at the beginning of each month. Many martial arts...
                                        <a className="about-link" href="about.html">
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
                                                    drumstick kielbasa burgdoggen pork chop prosciutto rump ground
                                                    round. Andouille ribeye chicken swine. Biltong rump venison.
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
                                                    drumstick kielbasa burgdoggen pork chop prosciutto rump ground
                                                    round. Andouille ribeye chicken swine. Biltong rump venison.
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
                                                    drumstick kielbasa burgdoggen pork chop prosciutto rump ground
                                                    round. Andouille ribeye chicken swine. Biltong rump venison.
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
                                                    drumstick kielbasa burgdoggen pork chop prosciutto rump ground
                                                    round. Andouille ribeye chicken swine. Biltong rump venison.
                                                </p>
                                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                                            </blockquote>
                                        </div>
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
                                                <a href="blog-single-right.html">Make It Your Destiny To Accomplish
                                                    Great Things In Your Life</a>
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
                                        <p>Fight School has specialized in martial arts since 1986 and has one of the
                                            most innovative programs in the nation.</p>
                                        <div className="widget widget_social_buttons">
                                            <a href="https://www.facebook.com/"
                                               className="fa fa-facebook border-icon rounded-icon" title="facebook"></a>
                                            <a href="https://twitter.com/"
                                               className="fa fa-twitter border-icon rounded-icon" title="twitter"></a>
                                            <a href="https://www.google.com/"
                                               className="fa fa-google-plus border-icon rounded-icon"
                                               title="google"></a>
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
                                    <p>&copy; Copyright <span className="copyright_year">2018</span> All Rights Reserved
                                    </p>
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
