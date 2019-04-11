import React, { Component } from 'react';

class Accordion extends Component {

    constructor() {
        super();

        this.state = {
            activeIndex: 0,
            faqs: [
                {
                    header: 'Do I have to be in shape to get started?',
                    message: `Not at all. You’ll find that our classes for beginners are the
                                    perfect way to build up your overall fitness level regardless of
                                    your physical condition. Good luck!`
                },
                {
                    header: 'Can I come and watch a class?',
                    message: `Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                              single-origin coffee nulla assumenda shoreditch et. Nihil anim
                              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                              sapiente ea proident.`
                },
                {
                    header: 'Am I too old to start martial arts training?',
                    message: `Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                              single-origin coffee nulla assumenda shoreditch et. Nihil anim
                              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                              sapiente ea proident.`
                },
                {
                    header: 'Will I get hurt during the training?',
                    message: `Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                              synth nesciunt you probably haven't heard of them accusamus labore
                              sustainable sunt aliqua put a bird on it squid single-origin coffee
                              shoreditch et.`
                }
            ]
        }
    }

    render(props) {
        return (
            <div className="faq-section-right">
                <div className="divider-90 d-none d-xl-block"></div>
                <h3 className="special-heading text-lg-left text-center">sparring / faq</h3>
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
