import React, { Component } from 'react';
import $ from 'jquery';

/* eslint-disable */
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
            <div className="owl-carousel" data-loop="true" data-margin="30" data-nav="true"
                 data-dots="true" data-center="false" data-items="1" data-autoplay="true"
                 data-responsive-xs="1" data-responsive-sm="2" data-responsive-md="3"
                 data-responsive-lg="3">
                <div className="vertical-item text-center">
                    <div className="item-media">
                        <img width="370" height="230" src="images/gallery/smac-little-dragons-class.jpg" alt=""/>
                        <div className="media-links">
                            <a className="abs-link" title="" href="/little-dragons"></a>
                        </div>
                    </div>
                    <a href="/little-dragons" className="services-icon">
                        <i className="fa fa-users"></i>
                    </a>
                    <div className="item-content">
                        <h5>
                            <a href="/little-dragons">Lil' Dragons</a>
                        </h5>
                        {/*<span>10:00-11:00 AM / LIZZIE MEYER</span>*/}
                        <p>
                            Dynamic, Highly Energetic <em>(30 min)</em> classes for 4 & 5 year old warriors!
                        </p>
                        <div className="services-link">
                            <a className="btn-sm bg-icon" href="/little-dragons">Learn More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="vertical-item text-center">
                    <div className="item-media">
                        <img src="images/gallery/smac-kids-class.jpg" alt=""/>
                        <div className="media-links">
                            <a className="abs-link" title="" href="/kids-taekwondo-class"></a>
                        </div>
                    </div>
                    <a href="/kids-taekwondo-class" className="services-icon">
                        <i className="fa fa-users"></i>
                    </a>
                    <div className="item-content">
                        <h5>
                            <a href="/kids-taekwondo-class">Kids Taekwondo Class</a>
                        </h5>
                        {/*<span>5:00-6:00 AM / ALEJANDRO DIAZ</span>*/}
                        <p>
                            This program is for ages 6-12 year olds.
                        </p>
                        <div className="services-link">
                            <a className="btn-sm bg-icon" href="/kids-taekwondo-class">Learn More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="vertical-item text-center">
                    <div className="item-media">
                        <img src="images/gallery/smac-teen-adult-class.jpg" alt=""/>
                        <div className="media-links">
                            <a className="abs-link" title="" href="/teen-adult-taekwondo-class"></a>
                        </div>
                    </div>
                    <a href="/teen-adult-taekwondo-class" className="services-icon">
                        <i className="fa fa-users"></i>
                    </a>
                    <div className="item-content">
                        <h5>
                            <a href="/teen-adult-taekwondo-class">Teen & Adult Taekwondo Class</a>
                        </h5>
                        {/*<span>5:00-6:00 AM / ALEJANDRO DIAZ</span>*/}
                        <p>
                            We cater to ages 4 and up with our Martial Arts classes.
                        </p>
                        <div className="services-link">
                            <a className="btn-sm bg-icon" href="/teen-adult-taekwondo-class">Learn More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="vertical-item text-center">
                    <div className="item-media">
                        <img src="images/gallery/smac-birthday-grp.jpg" alt=""/>
                        <div className="media-links">
                            <a className="abs-link" title="" href="/birthday-parties"></a>
                        </div>
                    </div>
                    <a href="/birthday-parties" className="services-icon">
                        <i className="fa fa-users"></i>
                    </a>
                    <div className="item-content">
                        <h5>
                            <a href="/birthday-parties">Birthday parties</a>
                        </h5>
                        {/*<span>6:00-7:00 PM / COLE BUTLER</span>*/}
                        <p>
                            We can organize an action-packed birthday party at our studio.
                        </p>
                        <div className="services-link">
                            <a className="btn-sm bg-icon" href="/birthday-parties">Learn More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="vertical-item text-center">
                    <div className="item-media">
                        <img src="images/gallery/smac-private-lessons.jpg" alt=""/>
                        <div className="media-links">
                            <a className="abs-link" title="" href="/private-lessons"></a>
                        </div>
                    </div>
                    <a href="/private-lessons" className="services-icon">
                        <i className="fa fa-users"></i>
                    </a>
                    <div className="item-content">
                        <h5>
                            <a href="/private-lessons">Private Lessons</a>
                        </h5>
                        {/*<span>6:00-7:00 PM / COLE BUTLER</span>*/}
                        <p>
                            Train one-on-one with a SMAC instructor. Appointment Required.
                        </p>
                        <div className="services-link">
                            <a className="btn-sm bg-icon" href="/private-lessons">Learn More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}


