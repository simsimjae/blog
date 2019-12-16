import React from 'react';
import styled from 'styled-components';
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

const PostList = ({ posts }) => {
  return (
    <List>
      {posts.map((item, index) => {
        const { path } = item.node.frontmatter;

        return <PostCard path={path} key={index} />;
      })}
    </List>
  );
};

export default PostList;
