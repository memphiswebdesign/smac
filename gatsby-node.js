const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        resolve(graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
              fields{
                  slug
              }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    return reject(result.errors)
                }
                const blogTemplate = path.resolve('./src/templates/blogTemplate.js');
                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    createPage({
                        path: node.fields.slug,
                        component: blogTemplate,
                        context: {
                            slug: node.fields.slug,
                        } // additional data can be passed via context
                    })
                })
            })
        )
    })
}

// highlight-start
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // highlight-end
    if (node.internal.type === `MarkdownRemark`) {
        // highlight-start
        const slug = createFilePath({ node, getNode, basePath: `src` })
        const layout = node.frontmatter.layout;
        console.log('slug', `/${layout}${slug}`);
        createNodeField({
            node,
            name: `slug`,
            value: `/${layout}${slug}`,
        })
        // highlight-end
    }
}
