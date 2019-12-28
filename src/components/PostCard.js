import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import removemd from 'remove-markdown';

const Card = styled.div`
  line-height: 1.3;
  box-shadow: inset 0 0 0 1px #e0e0e0;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  width: calc((100% - 20px * 5) / 4);
  margin-left: 20px;
  margin-top: 40px;
  @media screen and (max-width: 1600px) {
    width: calc((100% - 20px * 4) / 3);
    margin-left: 20px;
  }
  @media screen and (max-width: 1300px) {
    width: calc((100% - 20px * 3) / 2);
    margin-left: 20px;
  }
  @media screen and (max-width: 700px) {
    width: calc(100% - 3% * 2);
    margin-left: 3%;
  }
  &:hover {
    .thumbnail-wrapper:before {
      content: '';
      background: black;
      opacity: 0.2;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
    }
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .thumbnail-wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
    display: block;
  }
  .contents-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 20px;
    box-sizing: border-box;
    flex: 1;
  }
  .thumbnail {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .title {
    height: 5.2rem;
    font-size: 2rem;
    color: #222;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .desc {
    font-size: 16px;
    height: 72px;
    color: #888;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .date {
    color: #777;
    opacity: 0.5;
    font-size: 12px;
    text-align: right;
    margin: 3% 0 5%;
  }
`;

const PostCard = ({ data }) => {
  const { path, title, date } = data.frontmatter;
  const { content } = data.internal;
  console.log(content);
  return (
    <Card>
      <Link to={path}>
        <div className="thumbnail-wrapper">
          <img src="https://phinf.pstatic.net/tvcast/20171210_15/JQk4p_1512907951721EiFDQ_PNG/fVZgPG0PxYNm.png" className="thumbnail" alt="" />
        </div>
        <div className="contents-wrapper">
          <p className="title">{title}</p>
          <p className="date">{date}</p>
          <p className="desc">{removemd(content)}</p>
        </div>
      </Link>
    </Card>
  );
};

export default PostCard;
