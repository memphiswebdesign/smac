import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";

export default () => {
    return (
        <Layout>
            <Breadcrumb list={[
                {name: 'home', url: '/'},
                {name: 'programs', url: '/programs'},
                {name: 'schedule', url: '/schedule'} ]}
                title={'Schedule'} />
        </Layout>
    );
}
