import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>
        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'Programs', url: '/programs'}, {name: 'Litte Dragons', url: '/little-dragons'}]} title={"Little Dragons Class"}/>
        </Layout>
    );
} 
