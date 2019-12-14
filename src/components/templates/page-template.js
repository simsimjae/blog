import React from 'react';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default function pageTemplate({ data }) {
  const { html, frontmatter } = data.markdownRemark;
  console.log(html, frontmatter);
  return <div dangerouslySetInnerHTML={{ __html: data.markdownRemark }} />;
}
