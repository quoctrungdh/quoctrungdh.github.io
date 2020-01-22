import React from "react";
import { graphql, Link } from "gatsby";

export default ({ data }) => {
    const { allMarkdownRemark } = data;
    return (
        <div className="container">
            <h1 className="the-big-title">Trung Do's Blog</h1>
            <p>I'm a curious person who loves [web] engineering and building cool stuffs.
                <br /> A bit more details about myself</p>
            {allMarkdownRemark.edges.map(({ node }) => <article key={node.id}>
                <Link to={node.fields.slug} ><h2>{node.frontmatter.title}</h2></Link>
                <i>{node.frontmatter.date}</i>
                <p>{node.excerpt}</p>
            </article>)}

            <footer>Crafted with &hearts; and powered Gatsby &copy; {new Date().getFullYear()}</footer>
        </div>
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
    }
`