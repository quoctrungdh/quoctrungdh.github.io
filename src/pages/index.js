import React from "react"

export default ({ data }) => {
    const { allMarkdownRemark } = data;
    return (
        <div>
            <h1>Trung Do Blog</h1>
            <h4>{allMarkdownRemark.totalCount} posts</h4>
            {allMarkdownRemark.edges.map(({ node }) => <article>
                <h2>{node.frontmatter.title} - <span>{node.frontmatter.date}</span></h2>
                <p>{node.excerpt}</p>
            </article>)}
        </div>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`