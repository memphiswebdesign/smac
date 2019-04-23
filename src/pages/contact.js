import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../components/ContactForm";


export default () => {
    return (
        <Layout>
        
            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'contact', url: '/contact'} ]} title={'Contact'} />
            <ContactForm />

        </Layout>
    );
}
