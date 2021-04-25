import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/main";

import Intro from "../components/intro";

export default function BlogPost({ data }) {
    const post = data.markdownRemark;

    return (
        <MainLayout siteMetadata={{ title: post.frontmatter.title }}>
            <h2 className="">{post.frontmatter.title}</h2>
            <i className="text-sm text-gray-500">Posted {post.frontmatter.date}</i>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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