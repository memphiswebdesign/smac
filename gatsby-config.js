module.exports = {
    plugins: [
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'blog',
                path: `${__dirname}/src/blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'events',
                path: `${__dirname}/src/events`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
    ]
};
