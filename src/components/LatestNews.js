import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"

export const getRecentEvents = () => {
    const allMarkdownRemark = useStaticQuery(
        graphql`
            query {
              allMarkdownRemark(
                filter: {
                  frontmatter: {layout: {eq: "event"}}
                }
                limit: 3
                sort: {fields: frontmatter___date, order: DESC}
              ) {
                nodes {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    layout
                    date(formatString: "DD MMM YYYY")
                    location
                    featured_image
                  }
                  excerpt
                  fileAbsolutePath
                }
              }
            }
        `
    );
    return allMarkdownRemark;
};

export default () => {

    const { allMarkdownRemark } = getRecentEvents();

    return (
        <section className="ds s-pt-60 s-pb-0 s-py-md-90 c-mb-30 news-section">
            <div className="container">
                <div className="row">
                    <div className="divider-70 d-none d-xl-block"></div>
                    <div className="col-12">
                        <h3 className="special-heading text-center">Latest News &amp; Events</h3>
                        <div className="divider-60 d-none d-xl-block"></div>
                        <div className="row">
                            {allMarkdownRemark.nodes.map((post, index) => {
                                return (
                                    <div className="col-md-12 col-lg-4" key={ index }>
                                    <article
                                        className="vertical-item content-padding padding-small post type-post status-publish format-standard has-post-thumbnail">
                                        <div className="item-media post-thumbnail">
                                            <Link to={ post.fields.slug }>
                                                <img src={ post.frontmatter.featured_image } alt={ post.frontmatter.title }/>
                                            </Link>
                                        </div>
                                        <div className="item-content">
                                            <header className="entry-header">
                                                <div className="entry-meta">
                                                    <div className="entry-date">
                                                        <time className="published updated">
                                                            { post.frontmatter.date }
                                                        </time>
                                                    </div>
                                                    {/* Categories.. We could replace this with something else */}
                                                    {/*<div className="entry-categories">*/}
                                                        {/*<a href="#">karate</a>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <h4 className="entry-title">
                                                    { post.frontmatter.title }
                                                </h4>
                                            </header>

                                            <div className="entry-content">
                                                <p className="text-lg-left text-center">
                                                    { post.excerpt }
                                                </p>
                                                {/*<div className="blog-adds">*/}
													{/*<span className="like-count">*/}
														{/*<i className="fa fa-heart" aria-hidden="true"></i>*/}
														{/*7420*/}
													{/*</span>*/}
                                                    {/*<span className="views-count">*/}
														{/*<i className="fa fa-eye" aria-hidden="true"></i>*/}
														{/*5209*/}
													{/*</span>*/}
                                                    {/*<span className="comment-count">*/}
														{/*<i className="fa fa-comment" aria-hidden="true"></i>*/}
														{/*997*/}
													{/*</span>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="divider-10 d-none d-xl-block"></div>
                </div>
            </div>
        </section>
    )
}

