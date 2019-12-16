import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Categories from './Categories';

const Sidebar = styled.div`
  min-width: 250px;
  min-height: 100vh;
  background: black;
  color: white;
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .logo {
    font-family: 'Nunito', 'Noto Sans KR', sans-serif;
    font-size: 25px;
  }
`;

const sidebar = () => {
  return (
    <Sidebar>
      <div className="wrap">
        <Link to="/">
          <h1 className="logo">SIMSIMJAE</h1>
        </Link>
      </div>
      <Categories />
    </Sidebar>
  );
};
export default sidebar;
