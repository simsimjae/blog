import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';

const List = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 420px);
  grid-template-columns: repeat(3, 520px);
  justify-content: center;
  align-content: center;
  gap: 20px 20px;
  min-height: 100vh;
`;

const PostCardList = ({ posts }) => {
  return (
    <List>
      {posts.map((item, index) => {
        const { path } = item.node.frontmatter;

        return <PostCard path={path} key={index} />;
      })}
    </List>
  );
};

export default PostCardList;
