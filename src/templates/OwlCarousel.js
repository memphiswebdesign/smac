import React, { Component } from 'react';
import $ from 'jquery';

export default class OwlCarousel extends Component {

    // Need this so that jQuery controls the component, not React
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        window.jQuery = window.$ = $;
        require('../../static/js/vendor/owl.carousel.min.js');

        if ($().owlCarousel) {
            var $body = $('body');
            var $window = $(window);

            $('.owl-carousel').each(function() {
                var $carousel = $(this);
                $carousel.find('> *').each(function (i) {
                    $(this).attr('data-index', i);
                });
                var data = $carousel.data();

                var loop = data.loop ? data.loop : false,
                    margin = (data.margin || data.margin === 0) ? data.margin : 30,
                    nav = data.nav ? data.nav : false,
                    navPrev = data.navPrev ? data.navPrev : '<i class="fa fa-chevron-left">',
                    navNext = data.navNext ? data.navNext : '<i class="fa fa-chevron-right">',
                    dots = data.dots ? data.dots : false,
                    themeClass = data.themeclass ? data.themeclass : 'owl-theme',
                    center = data.center ? data.center : false,
                    items = data.items ? data.items : 4,
                    autoplay = data.autoplay ? data.autoplay : false,
                    responsiveXs = data.responsiveXs ? data.responsiveXs : 1,
                    responsiveSm = data.responsiveSm ? data.responsiveSm : 2,
                    responsiveMd = data.responsiveMd ? data.responsiveMd : 3,
                    responsiveLg = data.responsiveLg ? data.responsiveLg : 4,
                    draggable = (data.draggable === false) ? data.draggable : true,
                    syncedClass = (data.syncedClass) ? data.syncedClass : false,
                    filters = data.filters ? data.filters : false;

                if (filters) {
                    $carousel.after($carousel.clone().addClass('owl-carousel-filter-cloned'));
                    $(filters).on('click', 'a', function( e ) {
                        //processing filter link
                        e.preventDefault();
                        if ($(this).hasClass('selected')) {
                            return;
                        }
                        var filterValue = $( this ).attr('data-filter');
                        $(this).siblings().removeClass('selected active');
                        $(this).addClass('selected active');

                        //removing old items
                        for (var i = $carousel.find('.owl-item').length - 1; i >= 0; i--) {
                            $carousel.trigger('remove.owl.carousel', [1]);
                        };

                        //adding new items
                        var $filteredItems = $($carousel.next().find(' > ' +filterValue).clone());
                        $filteredItems.each(function() {
                            $carousel.trigger('add.owl.carousel', $(this));
                            $(this).addClass('scaleAppear');
                        });

                        $carousel.trigger('refresh.owl.carousel');

                        //reinit prettyPhoto in filtered OWL carousel
                        if ($().prettyPhoto) {
                            $carousel.find("a[data-gal^='prettyPhoto']").prettyPhoto({
                                hook: 'data-gal',
                                theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
                            });
                        }
                    });

                } //filters

                $carousel.owlCarousel({
                    loop: loop,
                    margin: margin,
                    nav: nav,
                    autoplay: autoplay,
                    dots: dots,
                    themeClass: themeClass,
                    center: center,
                    navText: [navPrev,navNext],
                    mouseDrag: draggable,
                    touchDrag: draggable,
                    items: items,
                    responsive: {
                        0:{
                            items: responsiveXs
                        },
                        767:{
                            items: responsiveSm
                        },
                        992:{
                            items: responsiveMd
                        },
                        1200:{
                            items: responsiveLg
                        }
                    },
                })
                    .addClass(themeClass);
                if(center) {
                    $carousel.addClass('owl-center');
                }

                $window.on('resize', function() {
                    $carousel.trigger('refresh.owl.carousel');
                });

                //topline two synced carousels
                if($carousel.hasClass('owl-news-slider-items') && syncedClass) {
                    $carousel.on('changed.owl.carousel', function(e) {
                        var indexTo = loop ? e.item.index+1 : e.item.index;
                        $(syncedClass).trigger('to.owl.carousel', [indexTo]);
                    })
                }


            });


        } //eof owl-carousel
    }

    render() {
        return (
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
        )
    }
}


