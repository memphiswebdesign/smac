import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const getRecentBlogPosts = () => {
    const allMarkdownRemark = useStaticQuery(
        graphql`
            query {
              allMarkdownRemark(
                filter: {
                  frontmatter: {layout: {eq: "blog"}}
                }
                limit: 2
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
                  fileAbsolutePath
                }
              }
            }
        `
    );
    return allMarkdownRemark;
};

export default () => {
    const { allMarkdownRemark } = getRecentBlogPosts();
    return (
        <div className="widget widget_recent_entries">

            <h3 className="widget-title">Recent Posts</h3>

            <ul>
                <li>
                    {allMarkdownRemark.nodes.map(( post, index ) => (
                        <React.Fragment key={ index }>
                            <a href={ post.fields.slug }>{ post.frontmatter.title }</a>
                            <span className="post-date">{ post.frontmatter.date }</span>
                        </React.Fragment>
                    ))}
                </li>
            </ul>
        </div>
    )
};

