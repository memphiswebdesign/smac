import React from "react"
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Breadcrumb from "../components/Breadcrumb";

export default ({ data }) => {
    return (
        <Layout>
            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'events', url: '/events'} ]} title={"Events"} />

            <div>{ data.allMarkdownRemark.nodes[0].frontmatter.title }</div>
        </Layout>
    );
}

export const query = graphql`
query EventsPageQuery {
  allMarkdownRemark(
    filter: {
      frontmatter: {layout: {eq: "event"}}
    }
  ) {
    nodes {
      frontmatter {
        title
        layout
        date
        location
        featured_image
      }
    }
  }
}
    `;
