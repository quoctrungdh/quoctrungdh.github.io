import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/main";

import Intro from "../templates/intro";

export default function BlogPost({ data }) {
    const post = data.markdownRemark;

    return (
        <MainLayout siteMetadata={{ title: post.frontmatter.title }}>
            <h2>{post.frontmatter.title}</h2>
            <i>Posted {post.frontmatter.date}</i>
            <div style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: post.html }} />
            <div style={{ marginBottom: "0.5rem" }}>
                <Intro />
            </div>
        </MainLayout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`