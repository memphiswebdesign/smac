import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>
        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'Programs', url: '/programs'}, {name: 'Teen & Adult Programs', url: '/teen-adult-taekwondo-class'}]} title={"Teen & Adult Taekwondo Class"}/>
        </Layout>
    );
} 
