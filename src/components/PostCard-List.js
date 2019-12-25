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
        const { path } = item.node.frontmatter;

        return <PostCard path={path} key={index} />;
      })}
      {posts.map((item, index) => {
        const { path } = item.node.frontmatter;

        return <PostCard path={path} key={index} />;
      })}
      {posts.map((item, index) => {
        const { path } = item.node.frontmatter;

        return <PostCard path={path} key={index} />;
      })}
    </List>
  );
};

export default PostCardList;
