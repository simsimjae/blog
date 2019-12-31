import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostCardList from '../PostCard-List';

// 이 템플릿으로 페이지를 찍어내는거니까 여기선 페이지 쿼리 사용 가능함.
export const query = graphql`
  query getPosts($postsGlob: String) {
    allMarkdownRemark(filter: { frontmatter: { path: { glob: $postsGlob } } }) {
      edges {
        node {
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
      }
    }
    allFile(filter: { relativePath: { glob: "banners/*" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allPixabayPhoto(limit: 10) {
      edges {
        node {
          largeImageURL
          pageURL
          tags
          user
        }
      }
    }
  }
`;

const PostCardListTemplate = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const gifs = data.allFile.edges;
  const pngs = data.allPixabayPhoto.edges;
  const images = [...gifs, ...pngs];

  return (
    <Layout>
      <PostCardList posts={posts} images={images} />
    </Layout>
  );
};

export default PostCardListTemplate;
