import React from 'react';
import { Link } from 'gatsby';
import { colors } from '../components/colors';

const styles = {
    activeStyle: {
        color: colors.primary
    }
};

const pages = [
    {
        display: 'Home',
        url: '/'
    }, 
    {
        display: 'About',
        url: '/about',
        subMenu: [
            {
                display: 'Team',
                url: '/team'
            },
            {
                display: 'Testimonials',
                url: '/testimonials'
            }
        ]
    },
    {
        display: 'Events & News',
        url: '/events'
    },
    {
        display: 'Programs',
        url: '/programs',
        subMenu: [
            {
                display: 'Class 1',
                url: '/class1'
            },
            {
                display: 'Class 2',
                url: '/class2'
            },
            {
                display: 'Class 3',
                url: '/class3'
            },
            {
                display: 'Class Schedule',
                url: '/schedule'
            }
        ]
    },
    {
        display: 'Contact',
        url: '/contact'
    }
];

function buildSubMenu(page) {
    if (page.subMenu) {
        return (
            <ul>
                {page.subMenu.map((sub, index) => (
                    <li key={index}>
                        <Link to={ sub.url } activeStyle={styles.activeStyle}>{ sub.display }</Link>
                    </li>
                ))}
            </ul>
        )
    } else {
        return null;
    }
}

function buildNavbar() {
    return pages.map((page, index) => {
        return (
            <li key={index}>
                <Link to={ page.url } activeStyle={styles.activeStyle}>{ page.display }</Link>
                {buildSubMenu(page)}
            </li>
        );
    });
}

export default () => (

    <header className="page_header ds ms justify-nav-center s-pt-10 s-pb-10">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-2 col-lg-3 col-11">
                    <a href="./" className="logo">
                        <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="140" height="52.63" viewBox="0 0 266 100">
                            <path fill="#e43d4e" d="M81.2 72.2c-5.3 0-10 0-14.8-.1-.5 0-1.2-.9-1.4-1.5-.2-.9-.1-1.9-.1-2.8V4.5c0-3.5 0-3.5 3.5-3.5 3.3 0 6.7-.2 9.9.1a9 9 0 0 1 4.8 2c5.3 4.8 10.5 9.7 15.6 14.6 1.4 1.3 2.3 1.5 3.7 0 5.2-5 10.4-10 15.8-14.8 1.2-1.1 3.1-1.7 4.7-1.8 3.3-.3 6.6 0 9.9-.1 2.3-.1 3.1.7 3.1 3.1-.1 15.6 0 31.1 0 46.7 0 6.3-.1 12.6 0 18.9 0 2-.5 2.7-2.6 2.7-3.5-.2-7-.2-10.5 0-2.3.1-2.9-.6-2.9-2.9.1-14 .1-28.1.1-42.1v-3.7c-1.2 1-1.9 1.5-2.5 2.1-5.1 5.1-10.3 10.2-15.3 15.3-1.3 1.4-2.2 1.3-3.5 0-5.2-5.6-10.7-11-16.1-16.4-.3-.3-.7-.4-1.4-1v48.5zM1.2 72.3c0-5.1-.1-9.8.1-14.5 0-.5 1.3-1.4 2-1.4 4.6-.1 9.2-.1 13.8-.1 7.2 0 14.5-.1 21.7 0 2.3 0 3.5-.6 3.3-3.2-.2-1.9-.2-3.8 0-5.6.2-2.2-.5-2.9-2.8-2.9-11.1.1-22.1.1-33.2 0-5.6 0-4.9.6-4.9-4.9 0-11.9 0-23.8-.1-35.7 0-2.3.7-3.1 3-3 16.9.1 33.8.1 50.6 0 2.4 0 3.4.7 3.3 3.2-.2 3.5-.2 7 0 10.5.1 2.2-.7 2.8-2.8 2.8-11.7-.1-23.5 0-35.2-.1-2.3 0-3.3.6-3 3 .2 1.8.2 3.8 0 5.6-.2 2.1.7 2.6 2.6 2.6 11.6-.1 23.1 0 34.7 0 3.6 0 3.6.1 3.6 3.5 0 12.3-.1 24.7.1 37 0 2.6-.8 3.3-3.3 3.2-16.8-.1-33.7 0-50.5 0h-3zM209.1 4.3c0-2.2.7-3 2.9-3 16.8.1 33.5.1 50.3 0 1.8 0 2.6.5 2.5 2.5-.1 3.7-.1 7.3 0 11 .1 2.3-.9 2.7-2.9 2.6-11.1-.1-22.3 0-33.4-.1-2.5 0-3.4.5-3.3 3.2.2 10.9.1 21.8 0 32.7 0 2.5.8 3.2 3.2 3.2 11-.1 21.9-.1 32.9-.1 3.4 0 3.5 0 3.5 3.5 0 3.4-.1 6.8 0 10.2 0 1.7-.4 2.5-2.3 2.5-17-.1-34-.1-51 0-1.9 0-2.4-.7-2.4-2.6.1-11 .1-54.7 0-65.6zM199.1 4.3c0-1.6.1-3-2.3-3-16.3.1-32.5.1-48.8.1-1.7 0-2.3.5-2.2 2.2.1 3.8.1 7.7 0 11.5 0 1.8.6 2.4 2.4 2.3 2.7-.1 5.4 0 8.6 0-4.8 18.6-9.5 36.6-14.3 55 5.5 0 10.3.1 15.2-.1.7 0 1.6-1.1 1.8-1.9.9-2.7 1.5-5.4 2.2-8.1.3-1.4.9-2 2.4-2 5.6.1 11.2.1 16.8 0 1.8 0 2.4.7 2.3 2.4-.1 2.4.1 4.8-.1 7.1-.1 1.8.5 2.6 2.4 2.5 3.6-.1 7.1-.2 10.7 0 2.1.1 2.8-.7 2.8-2.8 0-7.4.1-51 .1-65.2zm-18.3 40.1c-3.8-.1-7.7-.1-11.5 0-2.4.1-2.8-.9-2.2-2.9 1.3-5 2.6-10 4-15 .7-2.5 1.4-4.9 2-7.4.3-1.3.9-1.7 2.2-1.8 8-.3 8-.3 8 7.6V39c0 .9 0 1.8.1 2.7-.1 2-.8 2.7-2.6 2.7z"/>
                            <path fill="#fff" d="M2.7 99l-2-2v-3h2.5v2l.5.5h2.7L7 96v-2.7l-6.3-5v-4.9l2-2h4.8l2 2v3H7v-2l-.5-.5H3.7l-.5.5V87l6.3 5v5l-2 2H2.7zM13.5 99l-2-2V81.3H14V96l.5.5h2.7l.5-.5V81.3h2.5V97l-2 2h-4.7zM28.5 86.4v-2l-.5-.5h-2.7l-.5.5V96l.5.5H28l.5-.5v-2H31v3l-2 2h-4.8l-2-2V83.3l2-2H29l2 2v3h-2.5zM39.3 86.4v-2l-.5-.5H36l-.5.5V96l.5.5h2.7l.5-.5v-2h2.5v3l-2 2h-4.8l-2-2V83.3l2-2h4.8l2 2v3h-2.4zM46.2 83.9v5H50v2.5h-3.8v5h5V99h-7.6V81.3h7.6v2.5h-5zM55.2 99l-2-2v-3h2.5v2l.5.5h2.7l.5-.5v-2.7l-6.3-5v-4.9l2-2H60l2 2v3h-2.5v-2l-.5-.5h-2.7l-.5.5V87l6.3 5v5l-2 2h-4.9zM65.9 99l-2-2v-3h2.5v2l.5.5h2.7l.5-.5v-2.7l-6.3-5v-4.9l2-2h4.8l2 2v3h-2.5v-2l-.5-.5H67l-.5.5V87l6.3 5v5l-2 2h-4.9zM91.4 81.3V99h-2.5V88.7l-2.5 5.9-2.5-5.9V99h-2.5V81.3h2.1l3 6.9 3-6.9h1.9zM102.1 83.3V99h-2.5v-6.3h-3.8V99h-2.5V83.3l2-2h4.8l2 2zm-2.5 6.9v-5.8l-.5-.5h-2.7l-.5.5v5.8h3.7zM113.7 99H111l-2.7-6.3h-1.7V99H104V81.3h6.8l2 2v7.4l-1.9 1.9 2.8 6.4zm-7.1-8.8h3.3l.5-.5v-5.3l-.5-.5h-3.3v6.3zM123.7 83.9h-3V99h-2.5V83.9h-3v-2.5h8.6v2.5zM125.1 99V81.3h2.5V99h-2.5zM138.4 83.3V99h-2.5v-6.3h-3.8V99h-2.5V83.3l2-2h4.8l2 2zm-2.5 6.9v-5.8l-.5-.5h-2.7l-.5.5v5.8h3.7zM140.3 99V81.3h2.5v15.1h5V99h-7.5zM164.8 83.3V99h-2.5v-6.3h-3.8V99H156V83.3l2-2h4.8l2 2zm-2.5 6.9v-5.8l-.5-.5H159l-.5.5v5.8h3.8zM176.4 99h-2.7l-2.7-6.3h-1.7V99h-2.5V81.3h6.8l2 2v7.4l-1.9 1.9 2.7 6.4zm-7.2-8.8h3.3l.5-.5v-5.3l-.5-.5h-3.3v6.3zM186.4 83.9h-3V99h-2.5V83.9h-3v-2.5h8.6v2.5zM189.8 99l-2-2v-3h2.5v2l.5.5h2.7l.5-.5v-2.7l-6.3-5v-4.9l2-2h4.8l2 2v3H194v-2l-.5-.5h-2.7l-.5.5V87l6.3 5v5l-2 2h-4.8zM211.5 86.4v-2l-.5-.5h-2.7l-.5.5V96l.5.5h2.7l.5-.5v-2h2.5v3l-2 2h-4.8l-2-2V83.3l2-2h4.8l2 2v3h-2.5zM218.4 83.9v5h3.8v2.5h-3.8v5h5V99h-7.6V81.3h7.6v2.5h-5zM234.2 99h-2.1l-4.2-10.1V99h-2.5V81.3h2.1l4.2 10.1V81.3h2.5V99zM244.7 83.9h-3V99h-2.5V83.9h-3v-2.5h8.6v2.5zM248.7 83.9v5h3.8v2.5h-3.8v5h5V99h-7.6V81.3h7.6v2.5h-5zM265.3 99h-2.7l-2.7-6.3h-1.7V99h-2.5V81.3h6.8l2 2v7.4l-1.9 1.9 2.7 6.4zm-7.2-8.8h3.3l.5-.5v-5.3l-.5-.5h-3.3v6.3z"/>
                        </svg>
                    </a>
                </div>
                <div className="col-xl-8 col-lg-6 col-1 text-sm-center">
                    <nav className="top-nav">
                        <ul className="nav sf-menu">
                            { buildNavbar() }
                        </ul>
                    </nav>
                </div>
                {/* CTA Top Right */}
                <div className="col-xl-2 col-lg-3 text-right d-none d-xl-block">
                    <ul className="top-includes">
                        <li>
                            <span>
                                <a href="/trial" className="btn btn-outline-maincolor">free trial class</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <span className="toggle_menu"></span>
    </header>

);

