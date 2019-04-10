// import "../../static/js/vendor/bootstrap.bundle.min.js";
import React, { Component } from "react"
import OwlCarousel from '../components/OwlCarousel';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import LatestNews from "../components/LatestNews";
import InfoBanner from "../components/InfoBanner";
import { Link } from 'gatsby';

/* eslint-disable */
class Index extends Component {

    componentDidMount() {
        window.jQuery = window.$ = $;
        require('../../static/js/vendor/jquery.appear');

        var $body = $('body');

        if ($().appear) {
            //animation to elements on scroll
            var $animate = $('.animate');
            $animate.appear();

            $animate.filter(':appeared').each(function(index){
                initAnimateElement($(this), index);
            });

            $body.on('appear', '.animate', function(e, $affected ) {
                $($affected).each(function(index){
                    initAnimateElement($(this), index);
                });
            });

            //counters init on scroll
            if ($().countTo) {
                var $counter = $('.counter');
                $counter.appear();

                $counter.filter(':appeared').each(function(){
                    initCounter($(this));
                });
                $body.on('appear', '.counter', function(e, $affected ) {
                    $($affected).each(function(){
                        initCounter($(this));
                    });
                });
            }

            //bootstrap animated progressbar
            if ($().progressbar) {
                var $progressbar = $('.progress .progress-bar');
                $progressbar.appear();

                $progressbar.filter(':appeared').each(function(){
                    initProgressbar($(this));
                });
                $body.on('appear', '.progress .progress-bar', function(e, $affected ) {
                    $($affected).each(function(){
                        initProgressbar($(this));
                    });
                });
                //animate progress bar inside bootstrap tab
                $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
                    initProgressbar($($(e.target).attr('href')).find('.progress .progress-bar'));
                });
                //animate progress bar inside bootstrap dropdown
                $('.dropdown').on('shown.bs.dropdown', function(e) {
                    initProgressbar($(this).find('.progress .progress-bar'));
                });
            }

            //circle progress bar
            if ($().easyPieChart) {
                var $chart = $('.chart');

                $chart.appear();

                $chart.filter(':appeared').each(function(){
                    initChart($(this));
                });
                $body.on('appear', '.chart', function(e, $affected ) {
                    $($affected).each(function(){
                        initChart($(this));
                    });
                });

            }

        } //appear check

        function initAnimateElement(self, index) {
            var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
            var animationDelay = !self.data('delay') ? 150 : self.data('delay');
            setTimeout(function(){
                self.addClass("animated " + animationClass);
            }, index * animationDelay);
        }
        function initCounter(self) {
            if (self.hasClass('counted')) {
                return;
            } else {
                self.countTo().addClass('counted');
            }
        }
        function initProgressbar(el) {
            el.progressbar({
                transition_delay: 300
            });
        }
        function initChart(el) {
            var data = el.data();
            var size = data.size ? data.size : 270;
            var line = data.line ? data.line : 20;
            var bgcolor = data.bgcolor ? data.bgcolor : '#ffffff';
            var trackcolor = data.trackcolor ? data.trackcolor : '#c14240';
            var speed = data.speed ? data.speed : 3000;

            el.easyPieChart({
                barColor: trackcolor,
                trackColor: bgcolor,
                scaleColor: false,
                scaleLength: false,
                lineCap: 'butt',
                lineWidth: line,
                size: size,
                rotate: 0,
                animate: speed,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    }

    render() {
        return (
            <Layout renderHero={true} >

                <InfoBanner color={"navy"} />

                {/* About Block */}
                <section className="ds s-py-60 s-py-md-90 s-overlay mobile-overlay about-section">
                    <div className="container">
                        <div className="row d-flex justify-content-end">
                            <div className="divider-70 d-none d-xl-block"></div>
                            <div className="col-md-12 col-xl-6 ">
                                <h3 className="special-heading text-lg-left text-center">about <span
                                    className="color-main">SMAC</span></h3>
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

                {/* Programs (Classes) */}
                <section className="ds ms s-py-60 s-py-md-90 s-overlay program-section programs">
                    <div className="container">
                        <div className="row">
                            <div className="divider-70 d-none d-xl-block"></div>
                            <div className="col-12">
                                <h3 className="special-heading text-center">OUR programs</h3>
                                <div className="divider-60 d-none d-xl-block"></div>
                                <div className="divider-40 hidden-above-md"></div>

                                <OwlCarousel/>

                            </div>
                            <div className="divider-70 d-none d-xl-block"></div>
                        </div>
                    </div>
                </section>

                {/* What Clients Say */}
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

                {/* Instructors */}
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
                                    <div className="vertical-item box-shadow content-padding text-center">
                                        <div className="item-media">
                                            <img src="images/team/karenda-bolich.jpg" alt="karenda bolich black belt instructor"/>
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="team-single.html"></a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="team-single.html">Karenda Bolich</a></h5>
                                            <p className="small-text color-main">INSTRUCTOR TITLE</p>
                                            <p className="social-icons">
                                                <a href="https://www.facebook.com/kbolich" target="_blank" className="fa fa-facebook" title="facebook"></a>
                                                <a href="https://www.instagram.com/karendabolich/" target="_blank" className="fa fa-instagram" title="instagram"></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="vertical-item box-shadow content-padding text-center">
                                        <div className="item-media">
                                            <img src="images/team/amy-williams.jpg" alt="amy williams black belt instructor"/>
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="team-single.html"></a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="team-single.html">Amy Williams</a></h5>
                                            <p className="small-text color-main">INSTRUCTOR TITLE</p>
                                            <p className="social-icons">
                                                <a href="https://www.facebook.com/amy.b.williams.566" target="_blank" className="fa fa-facebook" title="facebook"></a>
                                                {/*<a href="#" className="fa fa-instagram" title="instagram"></a>*/}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="vertical-item box-shadow content-padding text-center">
                                        <div className="item-media">
                                            <img src="images/team/jacob-besse.jpg" alt="jacob besse black belt instructor"/>
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="team-single.html"></a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="team-single.html">Jacob Besse</a></h5>
                                            <p className="small-text color-main">INSTRUCTOR TITLE</p>
                                            <p className="social-icons">
                                                <a href="https://www.facebook.com/jacob.besse.5" target="_blank" className="fa fa-facebook" title="facebook"></a>
                                                <a href="https://www.instagram.com/p/BoiUgXbhoRP/" target="_blank" className="fa fa-instagram" title="instagram"></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="vertical-item box-shadow content-padding text-center">
                                        <div className="item-media">
                                            <img src="images/team/reid-presley.jpg" alt="Reid Presley black belt instructor"/>
                                            <div className="media-links">
                                                <a className="abs-link" title="" href="team-single.html"></a>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <h5><a href="team-single.html">Reid Presley</a></h5>
                                            <p className="small-text color-main">INSTRUCTOR TITLE</p>
                                            <p className="social-icons">
                                                <a href="https://www.facebook.com/ReidPresleyAthlete/" target="_blank" className="fa fa-facebook" title="facebook"></a>
                                                <a href="https://www.instagram.com/reidpresley/" target="_blank" className="fa fa-twitter" title="instagram"></a>
                                                <a href="https://twitter.com/ReidPresley" target="_blank" className="fa <fa-twitter></fa-twitter>" title="twitter"></a>
                                                <a href="https://twitter.com/ReidPresley" target="_blank" className="fa fa-link" title="personal website"></a>
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
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="divider-20 d-none d-lg-block"></div>
                                    <div class="col-md-12 text-center">
                                        <a class="btn btn-outline-maincolor" href="/team">Meet the Team</a>
                                    </div>
                                    <div class="divider-20 d-none d-lg-block"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactForm />

                {/* Sparring / FAQ */}
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

                <LatestNews />

                {/*<GoogleMaps/>*/}

                <InfoBanner color={"red"} />

            </Layout>
        );
    }

}

export default Index

