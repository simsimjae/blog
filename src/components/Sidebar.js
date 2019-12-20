import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Menus from './Menus';

const Sidebar = styled.div`
  width: 350px;
  background: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
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

  @media screen and (max-width: 1200px) {
    & {
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 100px;
      display: flex;
      .wrap {
        flex-direction: row;
      }
    }
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
      <Menus />
    </Sidebar>
  );
};
export default sidebar;
