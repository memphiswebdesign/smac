import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";
import Testimonials from "../components/Testimonials";

export default () => {
    return (
        <Layout>
            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'about', url: '/about'}, {name: 'testimonials', url: '/testimonials'} ]} title={"Testimonials"} />

            <Testimonials testimonialList={true} />
        </Layout>
    );
}
