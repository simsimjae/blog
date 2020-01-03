import { graphql } from "gatsby";

// TODO : 이부분 어떻게 처리 할지 고민해보기.
export default props => {
  return props;
};

export const query = graphql`
  fragment PostCardInfo on MarkdownRemark {
    frontmatter {
      title
      path
      date
      hero {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    excerpt(truncate: true, pruneLength: 200)
  }
`;
