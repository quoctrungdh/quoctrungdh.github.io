import React from "react";
import { graphql, Link } from "gatsby";

import MainLayout from "../layouts/main";

import Intro from "../templates/intro";

export default ({ data }) => {
    const { allMarkdownRemark, site } = data;
    return (
        <MainLayout siteMetadata={site.siteMetadata}>
            <Intro />
            {allMarkdownRemark.edges.map(({ node }) => <article key={node.id}>
                <Link to={node.fields.slug} ><h2>{node.frontmatter.title}</h2></Link>
                <i>{node.frontmatter.date}</i>
                <p>{node.excerpt}</p>
            </article>)}
        </MainLayout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`