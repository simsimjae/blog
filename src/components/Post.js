import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  margin: 50px 0 200px 100px;

  .post_title {
    font-size: 36px;
    color: black;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .post_date {
    color: #777;
    text-align: right;
    margin: 30px 0;
    font-size: 18px;
  }
  p {
    font-size: 20px;
    margin: 16px 0;
    color: #222;
    line-height: 1.6;
    word-break: break-all;
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
    margin: 100px 0 40px;
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

const Post = ({ html, frontmatter }) => {
  return (
    <PostWrapper>
      <h1 className="post_title">{frontmatter.title}</h1>
      <p className="post_date">{frontmatter.date}</p>
      <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
    </PostWrapper>
  );
};

export default Post;
