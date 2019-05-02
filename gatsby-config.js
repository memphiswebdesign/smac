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
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://smaclebanon.us8.list-manage.com/subscribe/post?u=82fc3d4e8e44c1e88fba92822&amp;id=10c51f8007',
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-5725188-1",
            },
        },
        `gatsby-plugin-react-helmet`,
    ]
};
