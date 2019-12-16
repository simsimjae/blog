import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import PostCard from './PostCard';

const List = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: borer-box;
  margin-left: -1.75rem;
  margin-top: -1.75rem;
`;

const PostList = ({ path }) => {
  // 전체 마크다운 포스트에서 현재 카테고리에 맞는 포스트만 걸러서 보여줌.
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  );

  console.log(data, path);

  return (
    <List>
      {data.allMarkdownRemark.edges.map((item, index) => {
        const currentPath = item.node.frontmatter.path;

        return <PostCard path={path} key={index} />;
      })}
    </List>
  );
};

export default PostList;
