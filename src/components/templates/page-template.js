import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';

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
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
