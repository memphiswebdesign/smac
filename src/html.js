import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
    <head>
        <title>SMAC - Success Martial Arts Center | Lebanon TN</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="utf-8"/>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="title" content="SMAC - Success Martial Arts Center | Lebanon TN" />
        <meta name="description" content="To provide a safe & fun environment while instilling core values, reinforcing what is taught at home and creating a positive lifestyle for your family through Martial Arts in the Lebanon TN area." />

        <meta property="og:type" content="website" data-react-helmet="true" />
        <meta property="og:url" content="http://smaclebanon.com/" data-react-helmet="true" />
        <meta property="og:title" content="SMAC - Success Martial Arts Center | Lebanon TN" data-react-helmet="true" />
        <meta property="og:description" content="To provide a safe & fun environment while instilling core values, reinforcing what is taught at home and creating a positive lifestyle for your family through Martial Arts in the Lebanon TN area."  data-react-helmet="true"/>
        <meta property="og:image" content="http://smaclebanon.com/assets/smac-profile-sq.jpg" data-react-helmet="true" />

        {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <noscript key="noscript" id="gatsby-noscript">
        This app works best with JavaScript enabled.
    </noscript>
    <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}
    </body>
    </html>
  )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
