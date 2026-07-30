import { graphql, Link, type HeadFC, type PageProps } from 'gatsby'
import 'github-markdown-css'

import * as style from './post.module.css'

export default function Post(props: PageProps<Queries.PostPageQuery>) {
  const { markdownRemark } = props.data
  const { date, title, authors } = markdownRemark?.frontmatter ?? {}
  const __html = markdownRemark?.html ?? ''
  return (
    <main className={style.main}>
      <h1>{title}</h1>
      <p className={style.info}>
        <time dateTime={date ?? undefined}>{date}</time>, by <b>{authors}</b>
      </p>
      <article className="markdown-body" dangerouslySetInnerHTML={{ __html }} />
      <footer className={style.footer}>
        <Link to="/">목록으로 돌아가기</Link>
      </footer>
    </main>
  )
}

export const pageQuery = graphql`
  query PostPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        title
        authors
      }
    }
  }
`

export const Head: HeadFC<Queries.PostPageQuery> = ({ data }) => (
  <>
    <title>{data.markdownRemark?.frontmatter?.title}</title>
    <link rel="icon" href="/static/logo.svg" type="image/svg+xml" sizes="any" />
  </>
)
