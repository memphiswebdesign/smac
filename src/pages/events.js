import React, { Component } from "react"
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import Breadcrumb from "../components/Breadcrumb";
import Pager from "../components/Pager";


class eventsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edges: []
        };
    }

    render() {
        return (
            <Layout>
                <Breadcrumb list={[{name: 'home', url: '/'}, {name: 'events', url: '/events'}]} title={"Upcoming Events"}/>

                <section className="ds s-pt-60 s-pb-60 s-py-md-60">
                    <div className="container">
                        <div className="d-none d-lg-block divider-40"></div>

                        <div className="row c-gutter-60">

                            <main className="offset-lg-1 col-lg-10">

                                {this.state.edges.map(({ node }, index) => {
                                    const event = node;
                                    return (
                                        <article className="post side-item content-padding ds ms" key={index}>
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-5">
                                                    <div className="item-media">
                                                        <img src={event.frontmatter.featured_image}
                                                             alt={event.frontmatter.title}/>
                                                        <div className="media-links">
                                                            <Link className="abs-link" to={event.fields.slug} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-8 col-lg-7 col-md-6">
                                                    <div className="item-content">

                                                        <h5>
                                                            <a href={event.fields.slug}>{event.frontmatter.title}</a>
                                                        </h5>

                                                        <p className="item-meta color-darkgrey">
                                                            <i className="fa fa-calendar color-main"></i>
                                                            <span>{event.frontmatter.date}</span>
                                                            <i className="fa fa-map-marker color-main"></i>
                                                            <span>{event.frontmatter.location}</span>
                                                        </p>
                                                        <p>{event.excerpt}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}

                                <Pager data={this.props.data.allMarkdownRemark} onPageChanged={(edges) => this.setState({ edges })}/>

                            </main>

                            <div className="d-none d-lg-block divider-70"></div>
                        </div>

                    </div>
                </section>

            </Layout>
        );
    }
}

export default eventsPage;

export const query =
    graphql`
    query EventsPageQuery {
      allMarkdownRemark(
      filter: {frontmatter: {layout: {eq: "event"}}}
      sort: {
          fields: [frontmatter___date, frontmatter___title]
          order: ASC
        }
      ) {
        totalCount
        pageInfo {
          hasNextPage
        }
        edges {
          node {
            id
            fields {
              slug
            }
            excerpt
            frontmatter {
              title
              layout
              date(formatString: "DD MMM YYYY h:mm a")
              featured_image
              location
            }
          }
        }
      }
    }
`;
