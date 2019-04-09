import React from 'react';

export default () => (
    <section className="ds s-py-60 s-py-md-90 c-mb-20 c-gutter-20 form-section">
        <div className="container">
            <div className="row">
                <div className="divider-70 d-none d-xl-block"></div>
                <div className="col-12">
                    <h3 className="special-heading text-center">Contact Us</h3>
                    <div className="divider-60 d-none d-xl-block"></div>
                    <div className="divider-40 hidden-above-md"></div>

                    <form name="contact-form" action="/contact-success" method="post" data-netlify="true">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="fullname_input"
                                           placeholder="Full Name" defaultValue="" required="required"/>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="phonenumber_input"
                                           placeholder="Phone Number" defaultValue="" required="required"/>
                                </div>
                            </div>
                            {/*<div className="col-xs-12 col-md-2">*/}
                                {/*<div className="form-group">*/}
                                    {/*<div className="field-date">*/}
                                        {/*<select className="form-control" name="date_time_42a77ed"*/}
                                                {/*required="required">*/}
                                            {/*<option value="">Date</option>*/}
                                            {/*<option value="Date">Date</option>*/}
                                            {/*<option value="Date">Date</option>*/}
                                        {/*</select>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-xs-12 col-md-2">*/}
                                {/*<div className="form-group">*/}
                                    {/*<div className="field-date">*/}
                                        {/*<select className="form-control" name="date_time_b63914d"*/}
                                                {/*required="required">*/}
                                            {/*<option value="">Time</option>*/}
                                            {/*<option value="Time">Time</option>*/}
                                            {/*<option value="Time">Time</option>*/}
                                        {/*</select>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                                <textarea className="form-control" rows="5" name="message_textarea"
                                                          placeholder="Your Message" required="required"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <button className="btn btn-maincolor" type="submit">Send Message</button>
                                {/*<button className="btn btn-outline-maincolor" type="submit">our contacts</button>*/}
                            </div>
                        </div>
                    </form>

                </div>
                <div className="divider-40 d-none d-xl-block"></div>
            </div>
        </div>
    </section>
)
