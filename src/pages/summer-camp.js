import React, { Component } from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>
        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'summer camp', url: '/summer-camp'}]} title={"Ultimate Summer Camp"}/>
        </Layout>
    );
}
