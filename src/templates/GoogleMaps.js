import React, { Component } from 'react';
import $ from 'jquery';

/**
 * Warning: This should be replaced with react-google-maps if we choose to implement this.
 */

export default class GoogleMaps extends Component {

    // Need this so that jQuery controls the component, not React
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        window.jQuery = window.$ = $;
        require('../../static/js/vendor/owl.carousel.min.js');
        let GoogleMapsLoader = require('google-maps'); // only for common js environments
        GoogleMapsLoader.load(function(google) {
            //Google Map script
            var $googleMaps = $('#map, .page_map');
            if ( $googleMaps.length ) {
                $googleMaps.each(function() {
                    var $map = $(this);

                    var lat;
                    var lng;
                    var map;

                    //map styles. You can grab different styles on https://snazzymaps.com/

                    //dark style
                    var styles = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#707070"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#be2026"},{"lightness":"0"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"hue":"#ff000a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"saturation":"-52"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

                    // light style
                    //var styles = [{"featureType": "water","elementType": "geometry","stylers": [{"color": "#e9e9e9"},{"lightness": 17}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]}];

                    //markers
                    var $markers = $map.find('.marker');

                    //map settings
                    var address = $markers.first().find('.marker-address').text() ? $markers.first().find('.marker-address').text() : 'london, baker street, 221b';
                    var geocoder = new google.maps.Geocoder();


                    var draggable = $map.data('draggable') ? $map.data('draggable') : false;
                    var scrollwheel = $map.data('scrollwheel') ? $map.data('scrollwheel') : false;

                    //type your address after "address="
                    geocoder.geocode({
                        address: address
                    }, function(data) {

                        lat = data[0].geometry.location.lat();
                        lng = data[0].geometry.location.lng();

                        var center = new google.maps.LatLng(lat, lng);
                        var settings = {
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            zoom: 16,
                            draggable: draggable,
                            scrollwheel: scrollwheel,
                            center: center,
                            styles: styles
                        };
                        map = new google.maps.Map($map[0], settings);

                        var infoWindows = [];

                        $($markers).each(function(index) {

                            var $marker = $(this);
                            var markerTitle = $marker.find('.marker-title').text();

                            //building info widnow HTML code
                            var markerDescription = '';
                            markerDescription += markerTitle ? '<h3 class="makret-title">' + markerTitle + '</h3>' : '';
                            markerDescription += $marker.find('.marker-description').html() ? '<div class="marker-description">' + $marker.find('.marker-description').html() + '</div>' : '';
                            if(markerDescription) {
                                markerDescription = '<div class="map_marker_description">' + markerDescription + '</div>';
                            }

                            geocoder.geocode({
                                address: $marker.find('.marker-address').text()
                            }, function(data){
                                var iconSrc = $marker.find('.marker-icon').attr('src');

                                var lat = data[0].geometry.location.lat();
                                var lng = data[0].geometry.location.lng();

                                var center = new google.maps.LatLng(lat, lng);

                                var marker = new google.maps.Marker({
                                    position: center,
                                    title: markerTitle,
                                    map: map,
                                    icon: iconSrc
                                });

                                var infowindow = new google.maps.InfoWindow({
                                    content: markerDescription
                                });

                                infoWindows.push(infowindow);

                                google.maps.event.addListener(marker, 'click', function() {
                                    for (var i=0;i<infoWindows.length;i++) {
                                        infoWindows[i].close();
                                    }
                                    infowindow.open(map,marker);
                                });
                            });
                        });
                    });
                }); //each Google map
            }//google map length
        });
    }

    render() {
        return (
            <section className="ds ms page_map main-map" data-draggable="false" data-scrollwheel="false">
                <div className="marker">
                    <div className="marker-address">sydney, australia, Liverpool street, 66</div>
                    <div className="marker-title">Reach Us</div>
                    <div className="marker-description">

                        <ul className="list-unstyled">
                            <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-map-marker"></i>
									</span>

									<span>
										Sydney, Australia, Liverpool street, 66
									</span>
								</span>
                            </li>

                            <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-phone"></i>
									</span>

									<span>
										1 (800) 123-45-67
									</span>
								</span>
                            </li>
                            <li>
								<span className="icon-inline">
									<span className="icon-styled color-main">
										<i className="fa fa-envelope"></i>
									</span>

									<span>
										mail@example.com
									</span>
								</span>
                            </li>
                        </ul>
                    </div>

                    <img className="marker-icon" src="images/map_marker_icon.png" alt=""/>
                </div>
            </section>
        )
    }
}


