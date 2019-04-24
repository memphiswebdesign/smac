import React from 'react';

export default () => (
    <section className="ds s-py-60 s-py-md-40 c-mb-20 c-gutter-20 form-section">
        <div className="container">
            <div className="row">
                <div className="divider-40 d-none d-xl-block"></div>
                <div className="col-12">
                    <h3 className="special-heading text-center">Contact Us</h3>
                    <div className="divider-40 d-none d-xl-block"></div>
                    <div className="divider-40 hidden-above-md"></div>

                    <form name="contact-form" action="/contact-success" method="post" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact-form" />
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="full_name"
                                           placeholder="Full Name" defaultValue="" required="required"/>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email_address"
                                           placeholder="Email Address" defaultValue="" required="required"/>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <input className="form-control" type="tel" name="phone_number"
                                           placeholder="Phone Number" defaultValue="" required="required"/>
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
                            <div className="col-12 text-center">
                                <button className="btn btn-maincolor" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="divider-30 d-none d-xl-block"></div>
            </div>
        </div>
    </section>
)
