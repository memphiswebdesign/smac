import React, { Component } from 'react';
import { Instructors } from "./data";
import SocialLinkList from "./SocialLinkList";

class InstructorsBlock extends Component {

/* eslint-disable */
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

  render(props) {
    return (
        <>
          <section className="ds ms s-py-60 s-py-md-90 s-overlay s-parallax team-section">
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
                    { Instructors.map((instructor, index) => (
                        <div className="vertical-item box-shadow content-padding text-center" key={ index }>
                          <div className="item-media">
                            <img src={ instructor.img_src } alt={ `${instructor.name} ${instructor.title}` } />
                            <div className="media-links">
                              <a className="abs-link screen-reader-text" title="" href={ instructor.page }>Instructor's Page</a>
                            </div>
                          </div>
                          <div className="item-content">
                            <h5><a href="team-single.html">{ instructor.name }</a></h5>
                            <p className="small-text color-main">{ instructor.title }</p>
                            <p className="social-icons">
                              <SocialLinkList list={ instructor.social } />
                            </p>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="divider-20 d-none d-lg-block"></div>
                    <div className="col-md-12 text-center">
                      <a className="btn btn-outline-maincolor" href="/team">Meet the Team</a>
                    </div>
                    <div className="divider-20 d-none d-lg-block"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
  }
}

export default InstructorsBlock;
