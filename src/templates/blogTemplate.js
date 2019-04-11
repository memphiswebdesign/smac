import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";

export default ({ data }) => {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <Breadcrumb list={[ {name: 'home', url: '/'}, {name: 'blog', url: '/blog'}, {name: frontmatter.title} ]} title={"Blog"} />

            <section className="ds s-pt-60 s-pb-60 s-py-md-90 c-gutter-60">
                <div className="container">
                    <div className="row">

                        <div className="d-none d-lg-block divider-70"></div>

                        <main className="offset-lg-1 col-lg-10">
                            <article className="vertical-item post type-post status-publish format-standard has-post-thumbnail">

                                <div className="item-media post-thumbnail">
                                    { frontmatter.featured_image ? (
                                        <img src={ frontmatter.featured_image } alt="" />
                                    ) : (
                                        <img/>
                                    ) }
                                </div>

                                <div className="item-content">
                                    <header className="entry-header">
                                        <h2 className="color-main">{ frontmatter.title }</h2>
                                        <div className="entry-meta">
                                            <div className="entry-date">
                                                <a rel="bookmark">
                                                    <time className="published updated" dateTime="2018-03-18T15:15:12+00:00">
                                                        { frontmatter.date }
                                                    </time>
                                                </a>
                                            </div>
                                        </div>
                                    </header>

                                    <div className="entry-content"
                                         dangerouslySetInnerHTML={{ __html: html }}>
                                    </div>


                                </div>
                            </article>

                            {/*<div className="ds ms author-bio side-item content-padding">*/}
                                {/*<div className="row">*/}
                                    {/*<div className="col-xl-4 col-lg-6 col-md-6">*/}
                                        {/*<div className="item-media cover-image">*/}
                                            {/*<img src="images/team/02.jpg" alt="" />*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col-xl-8 col-lg-6 col-md-6">*/}
                                        {/*<div className="item-content">*/}
                                            {/*<h5>Mario Roberts</h5>*/}
                                            {/*<p className="small-text text-left color-main">*/}
                                                {/*visitor*/}
                                            {/*</p>*/}
                                            {/*<p>*/}
                                                {/*Cow beef ball tip, biltong beef ribs ham hamburger pork capicola salami pig tenderloin.*/}
                                                {/*Porchetta cupim strip lion steak beef.*/}
                                            {/*</p>*/}
                                            {/*<div className="author-social">*/}
                                                {/*<a href="#" className="fa fa-facebook"></a>*/}
                                                {/*<a href="#" className="fa fa-twitter"></a>*/}
                                                {/*<a href="#" className="fa fa-google"></a>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<nav className="navigation post-nav" role="navigation">*/}
                                {/*<h2 className="screen-reader-text">Post navigation</h2>*/}
                                {/*<div className="nav-links">*/}
                                    {/*<div className="nav-previous cover-image s-overlay ds">*/}
                                        {/*<div className="post-nav-image">*/}
                                            {/*<img src="images/gallery/01.jpg" alt="" />*/}
                                        {/*</div>*/}

                                        {/*<div className="post-nav-text-wrap">*/}
                                            {/*<span className="screen-reader-text">prev</span>*/}
                                            {/*<span aria-hidden="true" className="nav-subtitle color-main">prev</span>*/}

                                            {/*<h5 className="nav-title">*/}
                                                {/*Meatloaf Jowl Pig Bacon*/}
                                                {/*Kevin Burgdoggen*/}
                                            {/*</h5>*/}
                                        {/*</div>*/}
                                        {/*<a href="blog-single-right.html" rel="prev"></a>*/}
                                    {/*</div>*/}
                                    {/*<div className="nav-next cover-image s-overlay ds">*/}
                                        {/*<div className="post-nav-image">*/}
                                            {/*<img src="images/gallery/02.jpg" alt="" />*/}
                                        {/*</div>*/}

                                        {/*<div className="post-nav-text-wrap">*/}
                                            {/*<span className="screen-reader-text">next</span>*/}
                                            {/*<span aria-hidden="true" className="nav-subtitle color-main">next</span>*/}

                                            {/*<h5 className="nav-title">*/}
                                                {/*Corned Beef Andouille*/}
                                                {/*Jowl Ball Tip*/}
                                            {/*</h5>*/}
                                        {/*</div>*/}
                                        {/*<a href="blog-single-right.html" rel="next"></a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</nav>*/}
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
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featured_image
        }
    }
}
`;
