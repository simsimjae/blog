import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCardList from "../components/PostCard-List";
import styles from "../styles/index.scss";

export const PostCardDatas = graphql`
  query getPostCardList {
    allMarkdownRemark(filter: { frontmatter: { path: { glob: "**" } } }, sort: { fields: frontmatter___date, order: DESC }) {
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

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const images = data.allFile.edges;
  return (
    <Layout>
      <SEO title="home" />
      <PostCardList posts={posts} images={images} />
    </Layout>
  );
};

export default IndexPage;
