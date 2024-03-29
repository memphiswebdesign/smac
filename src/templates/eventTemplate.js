import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet";

export default ({ data }) => {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html, excerpt } = markdownRemark;
    return (
        <Layout>

            <Helmet>
                <title>SMAC Event | { frontmatter.title }</title>
                <meta property="og:title" content={`SMAC Event | ${ frontmatter.title }`} />
                { excerpt ? (
                    <meta property="og:description" content={`${excerpt}`} />
                ) : (<></>) }
                { frontmatter.featured_image ? (
                    <meta property="og:image" content={`https://smaclebanon.com${ frontmatter.featured_image }`} />
                ) : (<></>) }
                { frontmatter.featured_image ? (
                    <meta property="og:image:secure_url" content={`https://smaclebanon.com${ frontmatter.featured_image }`} />
                ) : (<></>) }
            </Helmet>

            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'events', url: '/events'}, {name: frontmatter.title} ]} title={"Events"} />

            <section className="ds s-pt-60 s-pb-60 s-py-md-40 c-gutter-40">
                <div className="container">
                    <div className="row">

                        <main className="offset-lg-1 col-lg-10">
                            <article className="vertical-item post type-post status-publish format-standard has-post-thumbnail">

                                <div className="item-media post-thumbnail">
                                    { frontmatter.featured_image ? (
                                        <img src={ frontmatter.featured_image } alt={ frontmatter.title } />
                                    ) : (
                                        <span className="screen-reader-text">No image was find</span>
                                    ) }
                                </div>

                                <div className="item-content">
                                    <header className="entry-header">
                                        <h2 className="color-main">{ frontmatter.title }</h2>
                                        <div className="entry-meta">
                                            <div className="entry-date">
                                                <time className="published updated" dateTime="2018-03-18T15:15:12+00:00">
                                                    { frontmatter.date }
                                                </time>
                                            </div>
                                        </div>
                                    </header>

                                    <div className="entry-content"
                                         dangerouslySetInnerHTML={{ __html: html }}>
                                    </div>


                                </div>
                            </article>

                        </main>

                        <div className="d-none d-lg-block divider-70"></div>
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
        html
        fields {
            slug
        }
        excerpt
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featured_image
        }
    }
}
`;
