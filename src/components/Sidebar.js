import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Menus from './Menus';

const Sidebar = styled.div`
  min-width: 350px;
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
  .fixed_area {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 350px;
  }
`;

const sidebar = () => {
  return (
    <Sidebar>
      <div className="fixed_area">
        <div className="wrap">
          <Link to="/">
            <h1 className="logo">SIMSIMJAE</h1>
          </Link>
        </div>
        <Menus />
      </div>
    </Sidebar>
  );
};
export default sidebar;
