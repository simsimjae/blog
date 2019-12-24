import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';

const List = styled.div`
  display: grid;
  border: 5px solid red;
  grid-template-rows: repeat(2, 40%);
  grid-template-columns: repeat(4, 25%);
  gap: 20px;
  justify-content: center;
  min-height: 100vh;
  padding: 50px 0;
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(2, 35vw);
  }
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
