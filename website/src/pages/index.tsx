import { graphql, Link, type HeadFC, type PageProps } from 'gatsby'

import * as style from './index.module.css'

export default function Page(props: PageProps<Queries.IndexPageQuery>) {
  return (
    <main className={style.main}>
      <h1>LangDev Blog</h1>
      <ul>
        {props.data.allMarkdownRemark.edges.map((edge, index) => {
          const frontmatter = edge.node.frontmatter
          if (!frontmatter) return null
          const { path, title, authors } = frontmatter
          return (
            <li key={path ?? index}>
              <Link to={path!}>
                {title} - {authors}{' '}
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
      edges {
        node {
          frontmatter {
            path
            date
            title
            authors
          }
        }
      }
    }
  }
`

export const Head: HeadFC<Queries.IndexPageQuery> = () => (
  <>
    <title>LangDev Team Blog</title>
    <link rel="canonical" href="https://blog.langdev.org/" />
    <link rel="icon" href="/static/logo.svg" type="image/svg+xml" sizes="any" />
  </>
)
