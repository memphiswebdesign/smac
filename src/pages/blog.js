import React, { Component } from 'react';
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/Layout";
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    renderFeaturedImage(blog) {
        if (blog.frontmatter.featured_image) {
            console.log('blog', blog);
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
        const { data } = this.props;
    return (
      <>
          <Layout>
              <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'blog', url: '/blog'} ]} title={"Blog"} />

              <section className="ds s-pt-60 s-pb-30 s-py-md-90">
                  <div className="container">

                      <div className="row c-mb-30">
                          <div className="d-none d-lg-block divider-70"></div>

                          <main className="col-lg-12">

                              <div className="row isotope-wrapper masonry-layout">

                                  {/* Repeat for each blog post */}

                                  {data.allMarkdownRemark.nodes.map((blog, index) => {
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
                                                                  <a href="blog-single-video-full.html" rel="bookmark">
                                                                      <time className="published updated" dateTime="2018-03-18T15:15:12+00:00">
                                                                          { blog.frontmatter.date }
                                                                      </time>
                                                                  </a>
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

                              {/* Not doing paging for the moment.. Looks a little difficult with Gatsby */}
                              {/*<nav className="navigation pagination justify-content-center" role="navigation">*/}
                                  {/*<h2 className="screen-reader-text">Posts navigation</h2>*/}
                                  {/*<div className="nav-links">*/}
                                      {/*<a className="prev page-numbers" href="blog-right.html">*/}
                                          {/*<i className="fa fa-chevron-left"></i>*/}
                                          {/*<span className="screen-reader-text">Previous page</span>*/}
                                      {/*</a>*/}
                                      {/*<a className="page-numbers" href="blog-right.html">*/}
                                          {/*<span className="meta-nav screen-reader-text">Page </span>*/}
                                          {/*1*/}
                                      {/*</a>*/}
                                      {/*<span className="page-numbers current">*/}
										{/*<span className="meta-nav screen-reader-text">Page </span>*/}
										{/*2*/}
									{/*</span>*/}
                                      {/*<a className="page-numbers" href="blog-right.html">*/}
                                          {/*<span className="meta-nav screen-reader-text">Page </span>*/}
                                          {/*3*/}
                                      {/*</a>*/}
                                      {/*<a className="next page-numbers" href="blog-right.html">*/}
                                          {/*<span className="screen-reader-text">Next page</span>*/}
                                          {/*<i className="fa fa-chevron-right"></i>*/}
                                      {/*</a>*/}
                                  {/*</div>*/}
                              {/*</nav>*/}
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
        filter: {
          frontmatter: {layout: {eq: "blog"}}
        }
      ) {
        nodes {
          frontmatter {
            title
            layout
            date(formatString: "DD MMM YYYY")
            featured_image
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
`;

export default Blog;
