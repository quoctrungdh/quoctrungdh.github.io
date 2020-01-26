---
title: How to build a blog with Gatsby
date: "2020-01-11"
tags: ["gatsby"]
---

Như đã đề cập ở post trước về việc build 1 blog với Gatsby. Mình sẽ viết post này cụ thể và chi tiết những vấn đề kỹ thuật mà mình gặp phải khi làm với Gatsby, hy vọng có thể giúp ai đó tiết kiệm thời gian hơn khi đi chung con đường với mình.

### Why Gatsby?
Ban đầu mình chỉ định dùng Gatsby vì nó dùng React để render template (mình đã làm React được hơn 2 năm). NextJS thì mình có vài prototype ở cty nhưng phải cần 1 server để nhận request. 2 là có GraphQL, coi như 1 công 2 việc, học đc thêm GraphQL, món này hype cũng khá mà chưa có dịp làm trực tiếp.

Nhưng mình đã bị thuyết phục hoàn toàn khi bắt đầu đọc docs của Gatsby. Không chỉ là 8 phần steps-by-steps tutorial cho những bạn chưa có kinh nghiệm về web (cực kỳ chi tiết từ setup dev env -> deployment luôn). Mà còn là rất nhiều kiến thức nếu bạn đủ kiên nhẫn đi theo phần docs: page & layout structure re-use, what css methodoly to choose, choosing source data, optimizing images, intl and localize, tagging thậm chí về SEO, pagination, sitemap, search, analytics...
nói chung là rất rất nhiều, điều đó thể hiện độ nghiêm túc của project này, ko còn là 1 toy project là mà 1 real tool. Từ đó niềm tin Gatsby của mình ngày càng tăng.


Enough talking, let get some sh$t done,
### List all blog posts
Sau khi cài gatsby-cli và generate new project, mình đã có thể dùng graphql query (và gatsby-transformer-remark plugin) những file markdown mình đang có trong project.
```
import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
    const { allMarkdownRemark, site } = data;
    return (
        <div>
            {allMarkdownRemark.edges.map(({ node }) => <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <i>Posted {node.frontmatter.date}</i>
                <p>{node.excerpt}</p>
            </article>)}
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
                        date(formatString: "MMMM DD, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`
```
Từ đây mình đã có thể trích xuất data.allMarkdownRemark.edges để render list of posts trong React

### Programmatically create slugs and pages
Sau khi hoàn tất bước trên mình đã có thể thấy 1 list các posts hiện tại mình đang có, nhưng làm sao để có thể xem được nội dung từng post. Mình sẽ chia bước này thành 2 giai đoạn: tạo slug và tạo template blog post.
#### Tạo slug
Quan sát query trên thì mình có thể thấy là chúng ta chưa có field slug, mình có thể tạo ra 1 custom field để graphql trả về bằng cách dùng `createNodeField` API trong handler `onCreateNode` trong file `gatby-node.js`.
```
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}
```
Khởi động tại dev server thì chúng ta đã có thể query thêm field slug
```
{
    allMarkdownRemark {
        edges {
            node {
                fields {
                    slug
                }
            }
        }
    }
}
```

#### Tạo page template
Từ slug đã được thêm ở trên mình đã có thể tạo page programmatically bằng `createPage` API
```
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}
```
Tiếp theo mình sẽ tạo template `blog-post.js` để có thể handle request `http://url/slug`
```
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
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
```
Template này sẽ query data theo slug, lấy nội dung file Markdown và chuyển cho React render.

### Adding font and styles
Mình đã từng đọc qua về typography, đại khái là cách quy định hệ thống font-size, margin giữa các element theo "nhịp" (rhythm), làm cho website trở trên quy củ và hợp mắt. Trong docs của Gatsby có giới thiệu `gatsby-plugin-typography` ok apply thử xem sao
```
import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography({
    ...fairyGateTheme,
    baseFontSize: "16px",
    googleFonts: [
        {
            name: "Open Sans",
            styles: ["400", "400i", "700"],
        },
    ],
    headerFontFamily: ["Open Sans", "sans-serif"],
    bodyFontFamily: ["Open Sans", "sans-serif"],
})

export const { scale, rhythm, options } = typography
export default typography
```
Đây là config hiện tại của blog TrungDo, mình đã override lại font `Open Sans` cho theme FairyGate cho font default hiển thị tiếng Việt không đẹp lắm.

Ban đầu tính cài thêm tailwindcss, nhưng làm 1 hồi thấy chưa có nhiều css rules nên mình quyết định tạm thời vẫn dùng vanilla css.

### Deploy to github pages
Mình tận dụng github để push code và hosting luôn (it's fast and free), nhưng với userpage username.github.io, muốn có github page thì nhánh master phải có html (build folder) ở root, nên giải pháp mình chọn là master chỉ dùng để chứa build code để chạy được static page, code sẽ được push lên ở nhánh develop.

Workflow của mình:
 - git checkout from develop
 - make commit and merge into develop
 - npm run build
 - gh-pages -d public -b master (can be update into github actions so we can have CI/CD)

And tada, we got a working blog ready to show with the world :D.
