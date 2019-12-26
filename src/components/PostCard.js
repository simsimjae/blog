import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
    font-size: 20px;
    color: #222;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .desc {
    font-size: 16px;
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
    margin: 2% 0;
  }
`;

const PostCard = ({ path }) => {
  return (
    <Card>
      <Link to={path}>
        <div className="thumbnail-wrapper">
          <img src="https://phinf.pstatic.net/tvcast/20171210_15/JQk4p_1512907951721EiFDQ_PNG/fVZgPG0PxYNm.png" className="thumbnail" alt="" />
        </div>
        <div className="contents-wrapper">
          <p className="title">원티드 - 요즘 프론트엔드 개발 어떻게 하지? 참관 후기</p>
          <p className="date">2019년 12월 20일</p>
          <p className="desc">12월 4일 원티드에서 진행한 요즘 프론트 개발 어떻게하지?라는 행사에 참관했다. 이렇게 평일에 진행하는 행사에 참여해보는것은 진짜 드문일인것같다. 세줄이넘어가면</p>
        </div>
      </Link>
    </Card>
  );
};

export default PostCard;