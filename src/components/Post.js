import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
  margin: 0 0 300px 100px;
  width: 900px;
  p {
    font-size: 20px;
    margin: 16px 0;
    color: #222;
    line-height: 1.6;
  }
  h1,
  h2,
  h3 {
    color: #222;
  }
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 130px 0 24px;
    position: relative;
    &:first-child {
      margin-top: 50px;
    }
  }
  h2 {
    font-size: 23px;
    font-weight: bold;
    margin: 100px 0 24px;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0 20px;
  }
  ol {
    font-size: 18px;
    padding-left: 30px;
    list-style: initial;
    margin: 20px 0;
    color: #222;
    li:before {
      content: '';
    }
  }
  ul {
    font-size: 18px;
    color: #222;
    padding-left: 30px;
    list-style: decimal;
    margin: 20px 0;
  }
  li {
    & + li {
      margin-top: 15px;
    }
  }
  strong {
    padding: 3px 5px;
    border-radius: 5px;
    background: #ffefd5;
  }
`;

const Post = ({ html }) => {
  return <PostWrapper dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Post;
