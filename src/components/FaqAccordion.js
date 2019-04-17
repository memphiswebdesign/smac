import React, { Component } from 'react';

class Accordion extends Component {

    constructor() {
        super();

        this.state = {
            activeIndex: 0,
            faqs: [
                {
                    header: 'Will Martial Arts make my child aggressive?',
                    message: `The answer is NO. At SMAC, students are taught self control and understand clearly that martial arts is to be used for self defense only. It’s rare that students ever have to use it.`
                },
                {
                    header: 'Will this program increase my child’s self-esteem?',
                    message: `Absolutely! At SMAC, we teach our students through positive reinforcement. We have many creative ways to help a child overcome obstacles and increase their confidence.`
                },
                {
                    header: 'My child struggles making friends and is often bullied. Will this help my child?',
                    message: `At SMAC students are taught and encouraged to build each other up through praise and support for one another. Some will still struggle making friends at school but, at SMAC, they will make a new set of friends and have a place to feel included. Students dealing with bullies are encouraged to meet with Mr. Warren and parents to develop an action plan.`
                }
            ]
        }
    }

    render(props) {
        return (
            <div className="faq-section-right">
                <div className="divider-90 d-none d-xl-block"></div> 
                <h3 className="special-heading text-lg-left text-center">faq</h3>
                <div className="divider-50 d-none d-xl-block"></div>
                <div className="divider-40 hidden-above-md"></div>
                <div role="tablist">

                    {this.state.faqs.map((faq, index) => {
                        return (
                            <div className="card" key={ index }>
                                {/* Clickable Header */}
                                <div className="card-header">
                                    <h5>
                                        {/* Add toClick() */}
                                        <button data-toggle="collapse"
                                           className={this.state.activeIndex === index ? "" : "collapsed"}
                                           onClick={() => { this.setState({ activeIndex: index }) }} >
                                            <i className="fa fa-pencil"></i>
                                            { faq.header }
                                        </button>
                                    </h5>
                                </div>

                                {/* Message */}
                                <div className={ this.state.activeIndex === index ? "collapse show" : "collapse" }>
                                    <div className="card-body">
                                        <p>{ faq.message }</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
                <div className="divider-90 d-none d-xl-block"></div>
            </div>
        )
    }
}

export default Accordion;
