import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
  p {
    font-size: 18px;
    margin: 20px 0;
    color: #555;
    line-height: 1.7;
  }
  h1,
  h2,
  h3 {
    color: #222;
  }
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 30px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
      height: 1px;
      background: #ddd;
    }
  }
  h2 {
    font-size: 23px;
    font-weight: bold;
    margin: 35px 0 25px;
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
  code {
    background-color: #f5f5f5;
    padding: 3px 5px;
    font-size: 17px;
    color: #ff5b59;
    border-radius: 3px;
    margin: 0 5px;
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
