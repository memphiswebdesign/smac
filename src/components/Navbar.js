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
                        <img src="/images/logo.png" alt=""/>
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

