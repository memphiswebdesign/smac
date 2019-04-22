import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'gatsby';

export default class HeroSlider extends Component {

    // Need this so that jQuery controls the component, not React
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        window.jQuery = window.$ = $;
        require('../../static/js/vendor/jquery.flexslider-min.js');
        if ($().flexslider) {
            var $introSlider = $(".page_slider .flexslider");
            $introSlider.each(function(index){
                var $currentSlider = $(this);
                var data = $currentSlider.data();
                var nav = (data.nav !== 'undefined') ? data.nav : true;
                var dots = (data.dots !== 'undefined') ? data.dots : true;
                var speed = (data.speed !== 'undefined') ? data.speed : 7000;

                $currentSlider.flexslider({
                    animation: "fade",
                    pauseOnHover: true,
                    useCSS: true,
                    controlNav: dots,
                    directionNav: nav,
                    prevText: "",
                    nextText: "",
                    smoothHeight: false,
                    slideshowSpeed:speed,
                    animationSpeed:600,
                    start: function( slider ) {
                        slider.find('.intro_layers').children().css({'visibility': 'hidden'});
                        slider.find('.flex-active-slide .intro_layers').children().each(function(index){
                            var self = $(this);
                            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                            setTimeout(function(){
                                self.addClass("animated "+animationClass);
                            }, index*250);
                        });
                    },
                    after :function( slider ){
                        slider.find('.flex-active-slide .intro_layers').children().each(function(index){
                            var self = $(this);
                            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                            setTimeout(function(){
                                self.addClass("animated "+animationClass);
                            }, index*250);
                        });
                    },
                    end :function( slider ){
                        slider.find('.intro_layers').children().each(function() {
                            var self = $(this);
                            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                            self.removeClass('animated ' + animationClass).css({'visibility': 'hidden'});
                            // $(this).attr('class', '');
                        });
                    },

                })
                //wrapping nav with container - uncomment if need
                // .find('.flex-control-nav')
                // .wrap('<div class="container nav-container"/>')
            }); //.page_slider flex slider

            $(".flexslider").each(function(index){
                var $currentSlider = $(this);
                //exit if intro slider already activated
                if ($currentSlider.find('.flex-active-slide').length) {
                    return;
                }
                $currentSlider.flexslider({
                    animation: "fade",
                    useCSS: true,
                    controlNav: true,
                    directionNav: false,
                    prevText: "",
                    nextText: "",
                    smoothHeight: false,
                    slideshowSpeed:500000,
                    animationSpeed:800,
                })
            });
        }
    }

    render() {
        return (
            <section className="page_slider">
                <div className="flexslider">
                    <ul className="slides">
                        <li className="ds text-left">
                            <img src="images/slide01.jpg" alt=""/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="intro_layers_wrapper intro_text_bottom">
                                            <div className="intro_layers">
                                                <div className="intro_layer" data-animation="fadeinright">
                                                    <h2 className="intro_featured_word special-heading">
                                                        Become a<br/><span className="color-main2">Champion of Success</span>
                                                    </h2>
                                                </div>
                                                <div className="intro_layer short"
                                                     data-animation="fadeinright">
                                                    <p className="intro_before_featured_word">
                                                        Join SMAC today & train with the best!<br />We offer prorams for all ages & skill levels.
                                                    </p>
                                                </div>
                                                <div className="intro_layer button"
                                                     data-animation="fadeinleft">
                                                    {/*<button className="btn btn-maincolor intro_button">get a
                                                        free lesson
                                                    </button>*/}
                                                    {/*<a href="/trial" class="btn btn-maincolor intro_button">get a free lesson</a>*/}
                                                    <Link to={"/trial"} className="btn btn-maincolor intro_button">get a free lesson</Link>
                                                    <Link to={"/programs"} className="btn btn-outline-maincolor">view programs</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="ds text-left">
                            <img src="images/slide02.jpg" alt=""/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="intro_layers_wrapper intro_text_bottom">
                                            <div className="intro_layers">
                                                <div className="intro_layer" data-animation="fadeInRight">
                                                    <h2 className="intro_featured_word special-heading">
                                                        Train With<br /><span className="color-main2">Real World Champions</span>
                                                    </h2>
                                                </div>
                                                <div className="intro_layer short"
                                                     data-animation="fadeInRight">
                                                    <p className="intro_before_featured_word">
                                                        Join the Top Ranking Martial Artist today!<br />We train the best of the best.
                                                    </p>
                                                </div>
                                                <div className="intro_layer button"
                                                     data-animation="fadeInLeft">
                                                    <Link to={"/programs"} className="btn btn-maincolor intro_button">view programs</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="ds text-left">
                            <img src="images/slide03.jpg" alt=""/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="intro_layers_wrapper intro_text_bottom">
                                            <div className="intro_layers">
                                                <div className="intro_layer"
                                                     data-animation="fadeInRight">
                                                    <h2 className="intro_featured_word special-heading">
                                                        Begin Your<br/><span className="color-main2">Path to Success</span>
                                                    </h2>
                                                </div>
                                                <div className="intro_layer short"
                                                     data-animation="fadeInRight">
                                                    <p className="intro_before_featured_word">
                                                        Begin your Life Changing Journey Today!
                                                    </p>
                                                </div>
                                                <div className="intro_layer button"
                                                     data-animation="fadeInLeft">
                                                    <Link to={"/trial"} className="btn btn-maincolor intro_button">get a free lesson</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}


