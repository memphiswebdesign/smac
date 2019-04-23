import React from "react"
function data() {
    return (
        <>
        <div
            className="vertical-item testimonial-item box-shadow content-padding text-center">
            <blockquote className="quote-item">
                <div className="quote-image">
                    <img src="images/team/puckett-family.jpg" alt=""/>
                </div>
                <h5>Danielle Puckett</h5>
                <p className="small-text color-main">
                    Proud Parents
                </p>
                <p>
                    Our family has not only grown physically stronger but also mentally stronger at Success Martial Arts Center. Each one of us has learned to be more focused and to push forward even when we didn’t feel like we could. Most importantly we have become closer as a family by learning taekwondo together. As a bonus we have gained an amazing martial arts family at SMAC. Our instructors and fellow students have become a wonderful support system for us. And we are so thankful for our SMAC family!
                </p>
                <i className="fa fa-quote-right" aria-hidden="true"></i>
            </blockquote>
        </div>
        <div
            className="vertical-item testimonial-item box-shadow content-padding text-center">
            <blockquote className="quote-item">
                <div className="quote-image">
                    <img src="images/team/tim-lange-fam.jpg" alt=""/>
                </div>
                <h5>Tim Lange</h5>
                <p className="small-text color-main">
                    Proud Father
                </p>
                <p>
                    For the last two years, my boys have gone to Success Martial Arts Center.  During this time, they have learned not only how to defend themselves, but also respect, discipline, and hard work.  I’m thankful for these lessons that are shaping my children’s character. Jason Warren takes pride in each student and helps them to develop to their fullest potential.  He is always quick with a joke and very friendly with the students.
                </p>
                <i className="fa fa-quote-right" aria-hidden="true"></i>
            </blockquote>
        </div>
        <div
            className="vertical-item testimonial-item box-shadow content-padding text-center">
            <blockquote className="quote-item">
                <div className="quote-image">
                    <img src="images/team/amy-grauherr-fam.jpg" alt=""/>
                </div>
                <h5>Amy & Jim Grauherr</h5>
                <p className="small-text color-main">
                   Proud Parent
                </p>
                <p>
                    Our son has been attending Success Martial Arts Center (SMAC) for almost 2 years. We were looking into several martial arts centers before my son chose SMAC, which was one of the best decisions yet. We have felt like family since the first day we walked through the doors. Our son has grown leaps and bounds since starting. He is more out going and has made many friends. The instructors push the kids to the best of their ability through encouragement. They teach them respect, integrity, courage and to support their Team mates through good and bad times. Success Martial Arts Center is the best hands down.
                </p>
                <i className="fa fa-quote-right" aria-hidden="true"></i>
            </blockquote>
        </div>
        <div
            className="vertical-item testimonial-item box-shadow content-padding text-center">
            <blockquote className="quote-item">
                <div className="quote-image">
                    <img src="images/team/kellie-bodiford-fam.jpg" alt=""/>
                </div>
                <h5>Kellie Bodiford</h5>
                <p className="small-text color-main">
                    Proud Mom
                </p>
                <p>
                    When my son Gavin started Taekwondo two years ago at SMAC he was very shy and lacked self confidence. I can honestly say SMAC  has changed that for him. Not only has his confidence grown substantially he has made many friends at SMAC. He loves the sport and loves competing in tournaments. I am very grateful for the instructors. They go above and beyond for every student. SMAC has been such a positive for Gavin. 
                </p>
                <i className="fa fa-quote-right" aria-hidden="true"></i>
            </blockquote>
        </div>
        </>
    )
}
export default (props) => {
    return (
        <section className="ds s-py-30 s-py-md-30 testimonials-section">
            <div className="container">
                <div className="row">
                    <div className="divider-70 d-none d-xl-block"></div>
                    <div className="col-12">
                        <h3 className="special-heading text-center">what clients say</h3>
                        <div className="divider-60 d-none d-xl-block"></div>
                        { !props.testimonialList ? (
                            <div className="owl-carousel" data-loop="true" data-margin="30" data-nav="true"
                             data-dots="true" data-center="false" data-items="1" data-autoplay="false"
                             data-responsive-xs="1" data-responsive-sm="1" data-responsive-md="1"
                             data-responsive-lg="1">{data()}</div>
                            ):(<div>{data()}</div>) }

                    </div>

                </div>
            </div>
        </section>
    )
}