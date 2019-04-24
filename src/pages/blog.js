import React, { Component } from 'react';
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/Layout";
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Pager from '../components/Pager';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edges: []
        };
    }

    renderFeaturedImage(blog) {
        if (blog.frontmatter.featured_image) {
            return (
                <Link to={ blog.fields.slug }>
                    <img src={ blog.frontmatter.featured_image } alt={ blog.frontmatter.title } />
                </Link>
            )
        } else {
            return;
        }
    }

    render() {
        return (
            <>
                <Layout>
                    <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'blog', url: '/blog'} ]} title={"Blog"} />

                    <section className="ds s-pt-60 s-pb-30 s-py-md-90">
                        <div className="container">

                            <div className="row c-mb-30">

                                <main className="col-lg-12">

                                    <div className="row isotope-wrapper masonry-layout">

                                        {/* Repeat for each blog post */}
                                        {this.state.edges.map(({ node }, index) => {
                                            const blog = node;
                                            return (
                                                <div className="col-xl-4 col-md-6" key={ index }>
                                                    <article
                                                        className="vertical-item content-padding padding-small post type-post status-publish format-standard has-post-thumbnail">
                                                        <div className="item-media post-thumbnail">
                                                            { this.renderFeaturedImage(blog) }
                                                        </div>
                                                        <div className="item-content">
                                                            <header className="entry-header">
                                                                <div className="entry-meta">
                                                                    <div className="entry-date">
                                                                        <span>
                                                                            <time className="published updated">
                                                                                { blog.frontmatter.date }
                                                                            </time>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <h4 className="entry-title">
                                                                    <Link to={ blog.fields.slug} >
                                                                        { blog.frontmatter.title }
                                                                    </Link>
                                                                </h4>
                                                            </header>


                                                            <div className="entry-content">
                                                                <p>{ blog.excerpt }</p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            );
                                        })}

                                    </div>

                                    <Pager data={this.props.data.allMarkdownRemark} onPageChanged={(edges) => this.setState({ edges })}/>

                                </main>

                                <div className="d-none d-lg-block divider-70"></div>
                            </div>

                        </div>
                    </section>

                </Layout>
            </>
        );
    }
}

export const query = graphql`
query BlogPageQuery {
  allMarkdownRemark(
  filter: {frontmatter: {layout: {eq: "blog"}}}
  sort: {
      fields: [frontmatter___date, frontmatter___title]
      order: DESC
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
          date(formatString: "DD MMM YYYY")
          featured_image
        }
      }
    }
  }
}
`;

export default Blog;
