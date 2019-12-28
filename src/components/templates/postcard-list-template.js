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
          }
          excerpt(truncate: true, pruneLength: 200)
        }
      }
    }
  }
`;

const PostCardListTemplate = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <PostCardList posts={posts} />
    </Layout>
  );
};

export default PostCardListTemplate;
