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

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min; // 최소값 포함 최대값 미포함
};

const getImageNode = images => {
  const randomInt = getRandomInt(0, images.length);
  const imageNode = images[randomInt].node;

  return imageNode;
};

const PostCardList = ({ posts, images }) => {
  return (
    <List>
      {posts.map(item => {
        const node = getImageNode(images);

        return <PostCard key={item.id} data={item.node} fluidImage={node.childImageSharp && node.childImageSharp.fluid} gif={node.publicURL && node.publicURL} />;
      })}
    </List>
  );
};

export default PostCardList;
