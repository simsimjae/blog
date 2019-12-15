import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: borer-box;
  margin-left: -1.75rem;
  margin-top: -1.75rem;
  .item {
    display: flex;
    flex-direction: column;
    width: calc(33.3% - 1.75rem);
    height: 400px;
    margin-left: 1.75rem;
    margin-top: 1.75rem;
  }
  .thumbnail-wrapper {
    width: 100%;
    height: 0;
    padding-top: 50%;
    position: relative;
    display: block;
  }
  .thumbnail {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .title {
    font-size: 2rem;
  }
  .desc {
    font-size: 1rem;
  }
`;

const CardList = () => {
  return (
    <List>
      <div className="item">
        <a href="/" className="thumbnail-wrapper">
          <img src="https://phinf.pstatic.net/tvcast/20171210_15/JQk4p_1512907951721EiFDQ_PNG/fVZgPG0PxYNm.png" className="thumbnail" alt="" />
        </a>
      </div>
      <div className="item">
        <div className="thumbnail-wrapper">
          <img src="https://phinf.pstatic.net/tvcast/20171210_15/JQk4p_1512907951721EiFDQ_PNG/fVZgPG0PxYNm.png" className="thumbnail" alt="" />
        </div>
      </div>
      <div className="item">
        <div className="thumbnail-wrapper">
          <img src="https://phinf.pstatic.net/tvcast/20171210_15/JQk4p_1512907951721EiFDQ_PNG/fVZgPG0PxYNm.png" className="thumbnail" alt="" />
        </div>
      </div>
      <div className="item">
        <div className="thumbnail-wrapper">
          <img src="https://phinf.pstatic.net/tvcast/20171210_15/JQk4p_1512907951721EiFDQ_PNG/fVZgPG0PxYNm.png" className="thumbnail" alt="" />
        </div>
        <p className="title">제목입니다.</p>
        <p className="desc">내용입니다.</p>
      </div>
      <div className="item">
        <div className="thumbnail-wrapper">
          <img src="https://phinf.pstatic.net/tvcast/20171210_15/JQk4p_1512907951721EiFDQ_PNG/fVZgPG0PxYNm.png" className="thumbnail" alt="" />
        </div>
      </div>
    </List>
  );
};

export default CardList;
