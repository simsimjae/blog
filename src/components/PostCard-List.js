import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 50px 0;
  width: 100%;
  margin-top: -40px;
  @media screen and (max-width: 1500px) {
  }
`;

const PostCardList = ({ posts }) => {
  return (
    <List>
      {posts.map((item, index) => {
        return <PostCard key={index} data={item.node} />;
      })}
    </List>
  );
};

export default PostCardList;
