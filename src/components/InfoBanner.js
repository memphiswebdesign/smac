import React from 'react';

export default (props) => {

    let classSet = {
        navy: "c-my-40 c-my-lg-15 contact-info ds s-py-lg-50",
        red: "c-my-40 c-my-lg-15 contact-info cs s-overlay s-py-lg-50"
    };

    return (
        <section className={ classSet[props.color] }>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 text-center">
                        <div className="icon-box icon-absolute text-center">
                            <div className="icon-styled">
                                <i className="fa fa-phone"></i>
                            </div>
                            <span>CALL US TODAY</span>
                            <h5><a className="linked" href="tel:6154434783" target="_blank">(615)443-4783</a></h5>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <div className="icon-box icon-absolute text-center">
                            <div className="icon-styled">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <span>Lebanon, TN</span>
                            <h5><a className="linked" href="https://www.google.com/maps/place/1443+W+Baddour+Pkwy,+Lebanon,+TN+37087" target="_blank">1443 W Baddour Pkwy</a></h5>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <div className="icon-box icon-absolute text-center">
                            <div className="icon-styled">
                                <i className="fa fa-clock-o"></i>
                            </div>
                            <span>OPEN</span>
                            <h5>MONDAY - THURSDAY</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
