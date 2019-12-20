import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Post from '../Post';

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일")
        path
        title
      }
    }
  }
`;

export default function pageTemplate({ data }) {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Post className="post" html={html} frontmatter={frontmatter} />
    </Layout>
  );
}
