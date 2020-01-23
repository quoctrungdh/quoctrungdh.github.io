import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/main";

import Intro from "../templates/intro";

export default function BlogPost({ data }) {
    const post = data.markdownRemark;

    return (
        <MainLayout>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
            }
        }
    }
`