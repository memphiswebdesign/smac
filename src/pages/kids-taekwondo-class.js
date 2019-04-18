import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>
        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'Kids Classes', url: '/kids-taekwondo-class'}]} title={"Kids Taekwondo Class"}/>
        </Layout>
    );
} 
