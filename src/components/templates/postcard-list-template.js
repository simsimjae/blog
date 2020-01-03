import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostCardList from "../PostCard-List";

// 이 템플릿으로 페이지를 찍어내는거니까 여기선 페이지 쿼리 사용 가능함.
export const PostCardDatas = graphql`
  query getPosts($postsGlob: String) {
    allMarkdownRemark(filter: { frontmatter: { path: { glob: $postsGlob } } }, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          ...PostCardInfo
        }
      }
    }
    allFile(filter: { relativePath: { glob: "banners/*" } }) {
      edges {
        node {
          id
          publicURL
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const PostCardListTemplate = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const images = data.allFile.edges;
  return (
    <Layout>
      <PostCardList posts={posts} images={images} />
    </Layout>
  );
};

export default PostCardListTemplate;
